import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'

const API_END_POINTS = {
  CUSTOM_SELF_REGISTRATION_QR: '/apis/proxies/v8/customselfregistration',
  REGISTERED_LINKS_LIST: '/apis/proxies/v8/customselfregistration/listallqrs',
}

@Injectable({
  providedIn: 'root',
})
export class OnboardingService {
  public routeFromSelfRegistration: boolean = false

  constructor(private http: HttpClient) { }

  generateSelfRegistrationQRCode(request: any): Observable<any> {
    return this.http.post<any>(`${API_END_POINTS.CUSTOM_SELF_REGISTRATION_QR}`, request)
  }

  getListOfRegisteedLinks(request: any) {
    return this.http.post<any>(`${API_END_POINTS.REGISTERED_LINKS_LIST}`, request)
  }

  setFlagToCheckRoute(flag: boolean) {
    this.routeFromSelfRegistration = flag
  }
}
