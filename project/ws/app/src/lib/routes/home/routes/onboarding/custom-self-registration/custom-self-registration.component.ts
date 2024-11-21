import { Component, OnInit } from '@angular/core'
import { MatDialog } from '@angular/material/dialog'
import { ActivatedRoute, Router } from '@angular/router'
import { ICustomRegistrationQRCodeResponse, IOnBoardingConfig } from '../interface/onboarding.interface'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { MatSnackBar } from '@angular/material/snack-bar'
import { Clipboard } from '@angular/cdk/clipboard'
import { LoadingPopupComponent } from '../loading-popup/loading-popup.component'
import { OnboardingService } from '../../../services/onboarding.service'

@Component({
  selector: 'ws-app-custom-self-registration',
  templateUrl: './custom-self-registration.component.html',
  styleUrls: ['./custom-self-registration.component.scss'],
})
export class CustomSelfRegistrationComponent implements OnInit {
  configSvc: any
  onboardingConfig: IOnBoardingConfig | undefined
  selfRegistrationForm!: FormGroup
  customRegistrationLinks!: ICustomRegistrationQRCodeResponse
  rootOrdId = ''
  framewordId = ''
  todayDate = new Date()
  selectedButton = ''

  constructor(
    public dialog: MatDialog,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private formBuilder: FormBuilder,
    private snackbar: MatSnackBar,
    private clipboard: Clipboard,
    private onboardingService: OnboardingService,
  ) { }

  ngOnInit(): void {
    this.configSvc = this.activatedRoute.parent && this.activatedRoute.parent.snapshot.data.configService
    this.onboardingConfig = this.activatedRoute.parent && this.activatedRoute.parent.snapshot.data.pageData.data
    this.rootOrdId = this.configSvc.userProfile.rootOrgId
    this.framewordId = this.configSvc.orgReadData.frameworkid
    this.initializeForm()

    if (
      this.framewordId &&
      this.configSvc.orgReadData &&
      this.configSvc?.orgReadData?.startdateregistration &&
      this.configSvc.orgReadData?.enddateregistration
    ) {
      this.selfRegistrationForm.get('startDate')?.setValue(new Date(this.configSvc.orgReadData.startdateregistration))
      this.selfRegistrationForm.get('endDate')?.setValue(new Date(this.configSvc.orgReadData.enddateregistration))
      const links = {
        registrationLink: this.configSvc.orgReadData.registrationlink,
        qrRegistrationLink: this.configSvc.orgReadData.qrregistrationlink,
      }
      this.customRegistrationLinks = links
    }
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
    this.snackbar.open('Copied!')
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
        window.open(QRLink, '_blank')
      })
  }

  sendViaEmail(link: string): void {
    if (!link) { return }
    const message = `Register for ${this.configSvc.orgReadData.orgName} by clicking below ${link} `
    const subject = encodeURIComponent('Self Registration Link')
    const body = encodeURIComponent(`Self Registration Link: ${message}`)
    const mailtoLink = `mailto:?subject=${subject}&body=${body}`
    window.open(mailtoLink, '_self')
  }

  sendViaWhatsApp(link: string): void {
    if (!link) { return }
    const message = `Register for ${this.configSvc.orgReadData.orgName} by clicking below ${link} `
    const encodedLink = encodeURIComponent(message)
    const whatsappUrl = `https://api.whatsapp.com/send?text=${encodedLink}`
    window.open(whatsappUrl, '_blank')
  }

  generateRegistrationLink(): void {
    const dialogRef = this.dialog.open(LoadingPopupComponent, {
      autoFocus: false,
      width: '365px',
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
          this.configSvc.orgReadData.enddateregistration = new Date(this.selfRegistrationForm.controls['endDate'].value)
          this.configSvc.orgReadData.startdateregistration = new Date(this.selfRegistrationForm.controls['startDate'].value)
          dialogRef.close()

        } else if (response?.params?.errmsg) {
          this.snackbar.open(response?.params?.errmsg, '', { duration: 3000 })
          dialogRef.close()

        } else {
          this.snackbar.open('Oops! We couldn\'t generate the link or QR code.Please try again', '', { duration: 3000 })
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

  selectedButtonCode(type: string) {
    this.selectedButton = type
  }

}
