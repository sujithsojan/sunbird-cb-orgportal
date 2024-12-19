
import { DOCUMENT } from '@angular/common'
import { AfterViewInit, Component, Inject, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core'
/* tslint:disable */
import _ from 'lodash'
import { environment } from '../../../../../../../../../src/environments/environment'
import { ProfileV2Service } from '../../services/home.servive'
import { dashboardEmptyData } from '../../../../../../../../../src/mdo-assets/data/data'
/* tslint:enable */
import { Router } from '@angular/router'
import { EventService } from '@sunbird-cb/utils'
import { TelemetryEvents } from '../../../../head/_services/telemetry.event.model'
import { HttpClient } from '@angular/common/http'
import { map } from 'rxjs/internal/operators/map'
import { DomSanitizer } from '@angular/platform-browser'
const endpoint = {
  profilePid: '/apis/proxies/v8/api/user/v2/read',
  orgRead: '/apis/proxies/v8/org/v1/read',
  lookerProDashboard: 'apis/proxies/v8/looker/dashboard',
  // profileV2: '/apis/protected/v8/user/profileRegistry/getUserRegistryById',
  // details: `/apis/protected/v8/user/details?ts=${Date.now()}`,
  orgProfile: (orgId: string) => `/apis/proxies/v8/org/v1/profile/read?orgId=${orgId}`,
}
@Component({
  selector: 'ws-app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss', './bootstrap-rain.scss'],
  /* tslint:disable-next-line */
  encapsulation: ViewEncapsulation.None,
  /* tslint:disable */
  host: { class: 'flex flex-1' },
  /* tslint:enable */
})

export class WelcomeComponent implements OnInit, AfterViewInit, OnDestroy {
  // sliderData1!: any
  getDashboardForKM =
    '/apis/proxies/v8/dashboard/analytics/getDashboardConfig/Karmayogi'
  getDashboardForProfile =
    '/apis/proxies/v8/dashboard/analytics/getDashboardsForProfile/Karmayogi?realm=mdo'
  getChartV2 =
    '/apis/proxies/v8/dashboard/analytics/getChartV2/Karmayogi'

  resolutionFilter = 'week'
  compFilter = 'table'
  showCBPLink = false
  showKarmayogiLink = false
  deptName: any

  selectedDashboardId = ''

  currentDashboard: any = []
  dashboardEmpty = dashboardEmptyData
  lookerDashboardDetail: any
  userData: any
  constructor(
    @Inject(DOCUMENT) private document: Document,
    private homeResolver: ProfileV2Service,
    private router: Router,
    private events: EventService,
    private http: HttpClient,
    private domSanitizer: DomSanitizer) {
  }
  filterR(type: string) {
    this.resolutionFilter = type
  }
  filterComp(type: string) {
    this.compFilter = type
  }
  ngOnDestroy() {

  }
  ngOnInit() {
    this.getUserDetails()
    // this.fetchRoles()
    this.selectDashbord()
    this.getUserProfileDetail()
  }

  selectDashbord() {
    if (this.selectedDashboardId === '') {
      this.currentDashboard = []
      this.currentDashboard.push(this.dashboardEmpty)
    }
  }

  getUserDetails() {
    this.homeResolver.getUserDetails().subscribe((res: any) => {
      if (res.roles && res.roles.length > 0) {
        Object.keys(res.roles).forEach((key: any) => {
          const objVal = res.roles[key]
          if (objVal === 'CONTENT_CREATOR' || objVal === 'EDITOR' || objVal === 'PUBLISHER' || objVal === 'REVIEWER') {
            this.showCBPLink = true
          }
          if (objVal === 'Member') {
            this.showKarmayogiLink = true
          }
        })
      }
    })
  }
  // fetchRoles() {
  // const rolesAndAccessData: any[] = []
  // this.homeResolver.getMyDepartment().subscribe((roles: any) => {
  //   this.deptName = roles.deptName
  //   if (this.deptName) {
  // this.sliderData1 = {
  //   widgetType: 'slider',
  //   widgetSubType: 'sliderOrgBanners',
  //   style: {
  //     'border-radius': '8px',
  //   },
  //   widgetData: [
  //     {
  //       banners: {
  //         l: 'assets/images/banners/home/home_banner_l.jpg',
  //         m: 'assets/images/banners/home/home_banner_m.jpg',
  //         s: 'assets/images/banners/home/home_banner_m.jpg',
  //         xl: 'assets/images/banners/home/home_banner_xl.jpg',
  //         xs: 'assets/images/banners/home/home_banner_xl.jpg',
  //         xxl: 'assets/images/banners/home/home_banner_xl.jpg',
  //       },
  //       title: this.deptName,
  //       logo: 'assets/icons/govtlogo.jpg',
  //     },
  //   ],
  // }
  //   }
  //   roles.rolesInfo.forEach((role: { roleName: string }) => {
  //     rolesAndAccessData.push({
  //       role: role.roleName,
  //       count: roles.noOfUsers,
  //     })
  //   })
  // })
  // }

  openky() {
    this.openNewWindow()
  }
  openNewWindow(): void {
    const link = this.document.createElement('a')
    link.target = '_blank'
    link.href = environment.karmYogiPath
    link.click()
    link.remove()
  }
  openCBP() {
    this.openNewWindowCBP()
  }
  openNewWindowCBP(): void {
    const link = this.document.createElement('a')
    link.target = '_blank'
    link.href = environment.cbpPath
    link.click()
    link.remove()
  }
  ngAfterViewInit() {
  }

  viewmdoinfo(tab: any) {
    if (tab === 'leadership') {
      this.router.navigate(['/app/home/mdoinfo/leadership'])
    } else if (tab === 'staff') {
      this.router.navigate(['/app/home/mdoinfo/staff'])
    } else if (tab === 'budget') {
      this.router.navigate(['/app/home/mdoinfo/budget'])
    }
    this.events.raiseInteractTelemetry(
      {
        type: TelemetryEvents.EnumInteractTypes.CLICK,
        subType: TelemetryEvents.EnumInteractSubTypes.BTN_CONTENT,
        id: tab,
      },
      {}
    )
  }

  dashboardClick() {
    this.events.raiseInteractTelemetry(
      {
        type: TelemetryEvents.EnumInteractTypes.CLICK,
        subType: TelemetryEvents.EnumInteractSubTypes.BTN_CONTENT,
      },
      {}
    )
  }

  getDashboardId(value: string) {
    if (value && value !== null) {
      this.selectedDashboardId = value
    } else {
      this.currentDashboard = []
      this.currentDashboard.push(this.dashboardEmpty)
    }
  }

  async getUserProfileDetail() {
    this.userData = await this.http
      .get<any>(endpoint.profilePid)
      .pipe(map((res: any) => {
        // const roles = _.map(_.get(res, 'result.response.roles'), 'role')
        // _.set(res, 'result.response.roles', roles)
        return _.get(res, 'result.response')
      }))
      .toPromise()
    if (this.userData) {
      /* tslint:disable */
      console.log('userData', "rootOrgId", this.userData.rootOrgId, "userId", this.userData.userId)
      /* tslint:enable */
    }
  }

  showDashboard() {
    this.lookerDashboardDetail = ''
    let userId = ''
    if (this.userData && this.userData.rootOrgId === '01359132123730739281') {
      userId = 'c32ced54-14bc-4750-bed0-b335e4d0bc0e'
    } else if (this.userData && this.userData.rootOrgId === '01376822290813747263') {
      userId = '91d6d08a-8c23-4cc4-9e59-652fd292d426'
    }
    const embedUrl = '%2Fembed%2Fdashboards%2F7'
    const url = `${endpoint.lookerProDashboard}?externalUserId=${userId}&embedUrl=${embedUrl}`
    this.http.get<any>(url).subscribe(data => {

      if (data && data.signedUrl) {
        this.lookerDashboardDetail = this.domSanitizer.bypassSecurityTrustResourceUrl(data.signedUrl)
      }
    })

  }
}
