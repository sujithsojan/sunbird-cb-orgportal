import { Component, OnInit } from '@angular/core'
import { MatDialog } from '@angular/material/dialog'
import { ActivatedRoute, Router } from '@angular/router'
import { ICustomRegistrationQRCodeResponse, IOnBoardingConfig, IRegisteredLinksList } from '../interface/onboarding.interface'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { MatSnackBar } from '@angular/material/snack-bar'
import { Clipboard } from '@angular/cdk/clipboard'
import { LoadingPopupComponent } from '../loading-popup/loading-popup.component'
import { OnboardingService } from '../../../services/onboarding.service'
import { DesignationsService } from '../../designation/services/designations.service'
import _ from 'lodash'

@Component({
  selector: 'ws-app-custom-self-registration',
  templateUrl: './custom-self-registration.component.html',
  styleUrls: ['./custom-self-registration.component.scss'],
})
export class CustomSelfRegistrationComponent implements OnInit {
  configSvc: any
  onboardingConfig: IOnBoardingConfig | undefined
  selfRegistrationForm!: FormGroup
  customRegistrationLinks: ICustomRegistrationQRCodeResponse | any
  rootOrdId = ''
  framewordId = ''
  todayDate = new Date()
  registeredLinksList: IRegisteredLinksList[] = []
  numberOfUsersOnboarded = 0
  latestRegisteredData: IRegisteredLinksList | any = {}
  designationsList: any[] = []
  isLoading = false
  constructor(
    public dialog: MatDialog,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private formBuilder: FormBuilder,
    private snackbar: MatSnackBar,
    private clipboard: Clipboard,
    private onboardingService: OnboardingService,
    private designationsService: DesignationsService,

  ) { }

  ngOnInit(): void {
    this.configSvc = this.activatedRoute.parent && this.activatedRoute.parent.snapshot.data.configService
    this.onboardingConfig = this.activatedRoute.parent && this.activatedRoute.parent.snapshot.data.pageData.data
    this.rootOrdId = this.configSvc.userProfile.rootOrgId
    this.framewordId = this.configSvc.orgReadData.frameworkid
    this.initializeForm()

    if (this.framewordId && this.configSvc.orgReadData) {
      this.getFrameworkInfo(this.framewordId)
    }
  }

  getlistOfRegisterationLinks() {
    this.onboardingService.getListOfRegisteedLinks({ orgId: this.rootOrdId }).subscribe({
      next: (response: any) => {
        if (response.result && response.result.qrCodeDataForOrg.length) {
          this.registeredLinksList = response.result.qrCodeDataForOrg
          this.latestRegisteredData = this.registeredLinksList[this.registeredLinksList.length - 1]
          this.selfRegistrationForm.get('startDate')?.setValue(new Date(this.latestRegisteredData.startDate))
          this.selfRegistrationForm.get('endDate')?.setValue(new Date(this.latestRegisteredData.endDate))
          this.customRegistrationLinks = {
            registrationLink: this.latestRegisteredData.url,
            qrRegistrationLink: this.latestRegisteredData.qrCodeImagePath,
          }
          this.numberOfUsersOnboarded = this.latestRegisteredData.numberOfUsersOnboarded
        } else {
          this.customRegistrationLinks = undefined
        }
        this.isLoading = false
      },
      error: () => {

      },
    })
  }

  navigateTo(route: string): void {
    this.router.navigate([route])
  }

  initializeForm(): void {
    this.selfRegistrationForm = this.formBuilder.group({
      startDate: ['', [Validators.required]],
      endDate: ['', [Validators.required]],
    })
  }

  copyLinkToClipboard(link: string): void {
    this.clipboard.copy(link)
    this.snackbar.open('Copied!', '', { panelClass: ['success'] })
  }

  downloadQRCode(qrLink: string) {
    fetch(qrLink)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok')
        }
        return response.blob()
      })
      .then(blob => {
        const url = window.URL.createObjectURL(blob)
        const anchor = document.createElement('a')
        anchor.href = url
        anchor.download = 'QRCode.png'
        anchor.click()
        window.URL.revokeObjectURL(url)
      })
      .catch(() => {
        window.open(qrLink, '_blank')
      })
  }

  sendViaEmail(link: string): void {
    if (!link) { return }
    const message = `Register for ${this.configSvc.orgReadData.orgName} by clicking the link below:\n\n${link + ' '}`
    const subject = encodeURIComponent('Self Registration Link')
    const body = encodeURIComponent(message)
    const mailtoLink = `mailto:?subject=${subject}&body=${body}`
    window.open(mailtoLink, '_self')
  }

  sendViaWhatsApp(link: string): void {
    const message = `Register for ${this.configSvc.orgReadData.orgName} by clicking the link below:\n\n${link + ' '}`

    const encodedLink = encodeURIComponent(message)
    const whatsappUrl = `https://api.whatsapp.com/send?text=${encodedLink} `
    window.open(whatsappUrl, '_blank')
  }

  generateRegistrationLink(): void {
    const dialogRef = this.dialog.open(LoadingPopupComponent, {
      autoFocus: false,
      width: '365px',
      height: '201px',
      maxWidth: '80vw',
      maxHeight: '90vh',
      disableClose: true,
    })

    const payload = {
      registrationStartDate: (Math.floor(this.selfRegistrationForm.controls['startDate'].value.getTime())),
      registrationEndDate: (Math.floor(this.selfRegistrationForm.controls['endDate'].value.getTime())),
      orgId: this.rootOrdId,
    }
    this.onboardingService.generateSelfRegistrationQRCode(payload).subscribe({
      next: (response: any) => {
        if (response.result && Object.keys(response.result).length > 0 && response.responseCode === 'OK') {
          this.customRegistrationLinks = response.result
          this.latestRegisteredData.endDate = new Date(this.selfRegistrationForm.controls['endDate'].value)
          this.latestRegisteredData.startDate = new Date(this.selfRegistrationForm.controls['startDate'].value)
          this.latestRegisteredData.status = 'active'
          dialogRef.close()

        } else if (response?.params?.errmsg) {
          this.snackbar.open(response?.params?.errmsg, 'X', { duration: 3000, panelClass: ['error'] })
          dialogRef.close()

        } else {
          this.snackbar.open('Oops! We couldn\'t generate the link or QR code.Please try again', 'X', { duration: 3000, panelClass: ['error'] })
          dialogRef.close()
        }
      },
      error: () => {
        dialogRef.close()
      },
    })
  }

  checkRegistrationStatus(endDateRegistration: string): boolean {
    if (!endDateRegistration) { return false }

    const endDate = new Date(endDateRegistration)
    const today = new Date()
    return today <= endDate
  }

  getFrameworkInfo(frameworkid: string) {
    this.isLoading = true
    this.designationsService.getFrameworkInfo(frameworkid)
      .subscribe({
        next: (frameworkResponse) => {
          const frameworkDetails = _.get(frameworkResponse, 'result.framework')
          const categoriesOfFramework = _.get(frameworkDetails, 'categories', [])
          const organisationsList = this.getTermsByCode(categoriesOfFramework, 'org')
          this.designationsList = _.get(organisationsList, '[0].children', [])
          if (this.designationsList?.length && this.designationsList?.length > 0) {
            this.getlistOfRegisterationLinks()
          } else {
            this.isLoading = false
          }
        }
      })
  }

  private getTermsByCode(categories: any[], code: string) {
    const selectedCategory = categories.filter(
      (category: any) => category.code === code
    )
    return _.get(selectedCategory, '[0].terms', [])
  }
}
