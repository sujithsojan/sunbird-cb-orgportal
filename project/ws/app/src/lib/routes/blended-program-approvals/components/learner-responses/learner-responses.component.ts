import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core'
import { BlendedApporvalService } from '../../services/blended-approval.service'
import { NSProfileDataV2 } from '../../../home/models/profile-v2.model'

/* tslint:disable */
import _ from 'lodash'

@Component({
  selector: 'ws-app-learner-responses',
  templateUrl: './learner-responses.component.html',
  styleUrls: ['./learner-responses.component.scss']
})
export class LearnerResponsesComponent implements OnInit {
  @Input() selectedUser: any
  @Input() contentData: any
  @Output() clickBack = new EventEmitter()
  userId!: any
  learner!: any
  formId: any
  showActions: boolean = false
  userData: any
  apiData: any
  latestData: any
  isReadOnly = true
  showSpinner = true

  constructor(private bpService: BlendedApporvalService,) { }

  ngOnInit(): void {
    console.log("batchData ", this.contentData)
    if (this.contentData) {
      this.formId = this.contentData.wfSurveyLink.split("surveys/")[1]
    }
    if (this.selectedUser) {
      this.userId = this.selectedUser.wfInfo[0].userId
      this.showActions = this.selectedUser.wfInfo[0].currentStatus === 'SEND_FOR_MDO_APPROVAL'
    }
    this.fetchLearner()
    this.getSurveyReport()
  }

  fetchLearner() {
    this.bpService.getUserById(this.userId).subscribe((res: any) => {
      console.log(res)
      this.userData = res
      this.learner = {
        department: _.get(res, 'profileDetails.employmentDetails.departmentName'),
        profileImage: _.get(res, 'avatar'),
        name: `${_.get(res, 'firstName')}`,
        authorType: '',
        email: _.get(res, 'email'),
        profileLink: this.getProfileLink(res.profileDetails),
        userId: _.get(res, 'userId'),
        designation: _.get(res, 'profileDetails.professionalDetails[0].designation'),
      }
      console.log("learner ", this.learner)
    })
  }

  get getLearner() {
    return this.learner || null
  }

  getProfileLink(res: NSProfileDataV2.IProfile) {
    if (res && res.userId) {
      return `/app/profile/${res.userId}`
    }
    return '#'
  }

  moveBack() {
    this.clickBack.emit(true)
  }

  async getSurveyReport() {
    const req = {
      searchObjects: [
        {
          key: 'formId',
          values: this.formId,
        },
        {
          key: 'updatedBy',
          values: this.userId,
        },
      ],
    }
    const resList = await this.bpService.getSurveyByUserID(req).toPromise().catch(_error => { })
    if (resList && resList.statusInfo && resList.statusInfo.statusCode && resList.statusInfo.statusCode === 200) {
      const tempData = _.sortBy(resList.responseData, ['timestamp'])
      this.latestData = tempData[tempData.length - 1]
      setTimeout(() => {
        this.showSpinner = false
      }, 1000)
    }
    this.apiData = {
      getAPI: `/apis/proxies/v8/forms/getFormById?id=${this.latestData.formId}`,
      postAPI: `/apis/proxies/v8/forms/v1/saveFormSubmit`,
      getAllApplications: `/apis/proxies/v8/forms/getAllApplications`,
      customizedHeader: {},
    }
  }

}
