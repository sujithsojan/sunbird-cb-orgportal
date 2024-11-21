import { Component, OnDestroy, OnInit } from '@angular/core'
import { ReportsVideoComponent } from '../reports-video/reports-video.component'
import { MatDialog } from '@angular/material/dialog'
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router'
import { IOnBoardingConfig } from './interface/onboarding.interface'
import { DomSanitizer, SafeHtml } from '@angular/platform-browser'
import { Subscription } from 'rxjs'

@Component({
  selector: 'ws-app-onboarding',
  templateUrl: './onboarding.component.html',
  styleUrls: ['./onboarding.component.scss'],
})
export class OnboardingComponent implements OnInit, OnDestroy {
  onboardingNoteList: string[] = []
  configSvc: any
  currentRoute = 'self-registration'
  onBoardingConfig: IOnBoardingConfig | undefined
  routeSubscription: Subscription = new Subscription()
  panelOpenState = false
  constructor(
    public dialog: MatDialog,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private sanitizer: DomSanitizer,
  ) { }

  ngOnInit(): void {

    this.configSvc = this.activatedRoute.snapshot.data.configService
    this.onBoardingConfig = this.activatedRoute.snapshot.data.pageData.data

    this.onboardingNoteList = this.onBoardingConfig?.featureInformation?.notesList || []

    this.updateCurrentRoute()

    this.routeSubscription = this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.updateCurrentRoute()
      }
    })

  }

  ngOnDestroy(): void {
    if (this.routeSubscription) {
      this.routeSubscription.unsubscribe()
    }
  }

  sanitizeHtml(html: string): SafeHtml {
    return this.sanitizer.bypassSecurityTrustHtml(html)
  }

  openVideoPopup(): void {
    this.dialog.open(ReportsVideoComponent, {
      data: {
        videoLink: 'https://www.youtube.com/embed/tgbNymZ7vqY?autoplay=1&mute=1',
      },
      disableClose: true,
      width: '50%',
      height: '60%',
      panelClass: 'overflow-visable',
    })
  }

  routeTo(route: string): void {
    this.router.navigate([`/app/home/onboarding/${route}`])
  }

  updateCurrentRoute(): void {
    const urlSegments = this.router.url.split('/')
    this.currentRoute = urlSegments[urlSegments.length - 1]
  }
}
