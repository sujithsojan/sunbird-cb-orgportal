import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'

const API_END_POINTS = {
  CUSTOM_SELF_REGISTRATION_QR: '/apis/proxies/v8/customselfregistration',
}

@Injectable({
  providedIn: 'root',
})
export class OnboardingService {

  constructor(private http: HttpClient) { }

  generateSelfRegistrationQRCode(request: any): Observable<any> {
    return this.http.post<any>(`${API_END_POINTS.CUSTOM_SELF_REGISTRATION_QR}`, request)
  }
}
