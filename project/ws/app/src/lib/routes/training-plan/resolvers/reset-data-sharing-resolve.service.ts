import { Injectable } from '@angular/core'
import { ActivatedRouteSnapshot } from '@angular/router'
import { Observable, of } from 'rxjs'
import { TrainingPlanDataSharingService } from '../services/training-plan-data-share.service'
@Injectable()
export class ResetDataSharingResolveService
   {
  constructor(
    private tpdsSvc: TrainingPlanDataSharingService,
  ) { }
  resolve(
    _route: ActivatedRouteSnapshot
  ): Observable<any> {
    this.tpdsSvc.resetAllObjects()
    return of({})
  }
}
