import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { mergeMap, tap } from 'rxjs/operators'
import { Observable, of } from 'rxjs'
import { map } from 'rxjs/operators'
import { v4 as uuidv4 } from 'uuid'
// tslint:disable
import _ from 'lodash'
import { environment } from '../../../../../../../../../../src/environments/environment'
/* tslint:enable */

const API_END_POINTS = {
  COPY_FRAMEWORK: `/api/framework/v1/copy/${environment.ODCSMasterFramework}`,
  CREATE_TERM: (frameworkId: string, categoryId: string) =>
    `apis/proxies/v8/framework/v1/term/create?framework=${frameworkId}&category=${categoryId}`,
  PUBLISH_FRAMEWORK: (frameworkName: string) =>
    `apis/proxies/v8/framework/v1/publish/${frameworkName}`,
  UPDATE_ORG: '/apis/proxies/v8/org/v1/update',

  ORGANISATION_FW: '/apis/proxies/v8/framework/v1/read/organisation_fw',
  getDesignation: '/apis/proxies/v8/user/v1/positions',
  importDesignation: 'api/framework/v1/term/create?'
}

@Injectable({
  providedIn: 'root'
})
export class DesignationsService {
  list = new Map<string, any>()

  orgDesignationList: any = []

  constructor(
    private http: HttpClient
  ) { }

  getDesignations(_req: any): Observable<any> {
    return this.http.get<any>(API_END_POINTS.getDesignation).pipe(
      mergeMap((result: any) => {
        if (result && result.responseData) {
          return this.formateMasterDesignationList(result.responseData)
        }
        return result
      })
    )
  }

  formateMasterDesignationList(designationsList: any): Observable<any> {
    const formatedDesignationsLsit: any = []
    if (designationsList) {
      designationsList.forEach((masterDesignation: any) => {
        masterDesignation['isOrgDesignation'] = this.orgDesignationList
          .find((element: any) => element.name === masterDesignation.name) ? true : false
        masterDesignation['selected'] = masterDesignation['isOrgDesignation']
        formatedDesignationsLsit.push(masterDesignation)
      })
    }

    return of(formatedDesignationsLsit)
  }

  getFrameworkInfo(): Observable<any> {
    return this.http.get(`${API_END_POINTS.ORGANISATION_FW}`, { withCredentials: true }).pipe(
      tap((response: any) => {
        this.formateData(response)
      }),
    )
  }

  formateData(response: any) {
    (response.result.framework.categories).forEach((a: any) => {
      this.list.set(a.code, {
        code: a.code,
        identifier: a.identifier,
        index: a.index,
        name: a.name,
        selected: a.selected,
        status: a.status,
        description: a.description,
        translations: a.translations,
        category: a.category,
        associations: a.associations,
        // config: this.getConfig(a.code),
        children: (a.terms || []).map((c: any) => {
          const associations = c.associations || []
          if (associations.length > 0) {
            Object.assign(c, { children: associations })
          }
          return c
        })
      })
    })

    const allCategories: any = []
    this.list.forEach((a: any) => {
      allCategories.push({
        code: a.code,
        identifier: a.identifier,
        index: a.index,
        name: a.name,
        status: a.status,
        description: a.description,
        translations: a.translations,
      })
    })
    // this.categoriesHash.next(allCategories)

  }

  getUuid() {
    return uuidv4()
  }

  copyFramework(request: any): Observable<any> {
    return this.http.post<any>(`${API_END_POINTS.COPY_FRAMEWORK}`, request).pipe(map(res => _.get(res, 'result.response')))
  }

  createTerm(frameworkId: string, categoryId: string, requestBody: any) {
    return this.http.post(`${API_END_POINTS.CREATE_TERM(
      frameworkId,
      categoryId,
    )}`, requestBody)
  }

  publishFramework(frameworkName: string) {
    return this.http.post(`${API_END_POINTS.PUBLISH_FRAMEWORK(frameworkName)}`, {})
  }

  updateOrg(request: any) {
    return this.http.patch(`${API_END_POINTS.UPDATE_ORG}`, request)
  }

  // getConfig(code: string) {
  //   let categoryConfig: any
  //   if (this.rootConfig && this.rootConfig[0]) {
  //     this.rootConfig.forEach((config: any, index: number) => {
  //       if (this.frameworkId == config.frameworkId) {
  //         categoryConfig = config.config.find((obj: any) => obj.category == code)
  //       }
  //     })
  //   }
  //   return categoryConfig
  // }

  importDesigantion(framework: string, category: string, reqBody: any): Observable<any> {
    return this.http.post<any>(`${API_END_POINTS.importDesignation}framework=${framework}&category=${category}`, reqBody)
  }
}
