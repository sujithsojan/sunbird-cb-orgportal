import { Component, ElementRef, OnInit, ViewChild, ViewEncapsulation } from '@angular/core'
import { Router } from '@angular/router'
import { ConfigurationsService, NsPage } from '@sunbird-cb/utils'
import { mapFilePath, dashboardEmptyData } from '../../../../../../../../../src/mdo-assets/data/data'
import { HttpClient } from '@angular/common/http'
import { map } from 'rxjs/internal/operators/map'

import _ from 'lodash'
import { CreateMDOService } from '../../../../head/work-allocation-table/create-mdo.services'
const endpoint = {
  profilePid: '/apis/proxies/v8/api/user/v2/read',
  orgRead: '/apis/proxies/v8/org/v1/read',
  lookerProDashboard: 'apis/proxies/v8/looker/dashboard'
}
@Component({
  selector: 'ws-app-my-dashboard-home',
  templateUrl: './my-dashboard-home.component.html',
  styleUrls: ['./my-dashboard-home.component.scss', 'bootstrap-rain.scss'],
  /* tslint:disable-next-line */
  encapsulation: ViewEncapsulation.None,
  /* tslint:enable */
})
export class MyDashboardHomeComponent implements OnInit {

  constructor(private router: Router, private configSvc: ConfigurationsService, private http: HttpClient,
    private mdoService: CreateMDOService) { }
  pageNavbar: Partial<NsPage.INavBackground> = this.configSvc.pageNavBar
  getDashboardForKM =
    '/apis/proxies/v8/dashboard/analytics/getDashboardConfig/Karmayogi'
  getDashboardForProfile =
    '/apis/proxies/v8/dashboard/analytics/getDashboardsForProfile/Karmayogi?realm=mdo'
  getChartV2 =
    '/apis/proxies/v8/dashboard/analytics/getChartV2/Karmayogi'

  selectedDashboardId = ''

  mapPath = mapFilePath

  currentDashboard: any = []

  dashboardEmpty = dashboardEmptyData
  token = ''
  lookerDashboardDetail: any
  userData: any
  @ViewChild('lookerIframe', { static: false }) lookerIframe!: ElementRef
  ngOnInit() {
    if (this.selectedDashboardId === '') {
      this.currentDashboard = []
      this.currentDashboard.push(this.dashboardEmpty)
    }
    this.getUserProfileDetail()
  }

  getDashboardId(value: string) {
    if (value && value !== null) {
      this.selectedDashboardId = value
    } else {
      this.currentDashboard = []
      this.currentDashboard.push(this.dashboardEmpty)
    }
  }

  backToHome() {
    this.router.navigate(['page', 'home'])
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
      this.showDashboard()
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
    let requestPayload = {
      "request": {
        "embedUrl": '/embed/dashboards/7',
        "sessionLengthInSec": 900,
        "userAttributes": {
          "roles": this.userData.roles,
          "orgId": this.userData.rootOrgId,
          "userId": userId
        }
      }
    }
    const url = `${endpoint.lookerProDashboard}`
    this.mdoService.getDashboardData(url, requestPayload).subscribe(data => {
      if (data && data.signedUrl) {
        // this.lookerDashboardDetail = this.domSanitizer.bypassSecurityTrustResourceUrl(data.signedUrl)
        this.lookerDashboardDetail = data.signedUrl
        //  this.lookerDashboardDetail = 'https://karamyogibharat.cloud.looker.com/login/embed/%252Fembed%252Fdashboards%252F7?access_filters=%7B%22fake_model%22%3A%7B%22id%22%3A1%7D%7D&external_group_id=%225%22&external_user_id=%2291d6d08a-8c23-4cc4-9e59-652fd292d426%22&force_logout_login=false&group_ids=%5B%225%22%2C%226%22%5D&models=%5B%22employee_enrolment%22%2C%22igot%22%5D&nonce=%22d7a9a327d6404a8b%22&permissions=%5B%22see_user_dashboards%22%2C%22see_lookml_dashboards%22%2C%22access_data%22%2C%22see_looks%22%5D&session_length=900&signature=ZF8yHb31XBiuHztsJdJc5a40vwk%3D&time=1734694852&user_attributes=%7B%22user_id%22%3A%2291d6d08a-8c23-4cc4-9e59-652fd292d426%22%7D'
        this.reloadIframeWithNewUser()
      }
    })

  }


  // Function to reload the iframe with a new URL for a new user
  reloadIframeWithNewUser() {
    if (this.lookerIframe) {
      const iframe: HTMLIFrameElement = this.lookerIframe.nativeElement
      iframe.src = this.lookerDashboardDetail
    }

  }

}
