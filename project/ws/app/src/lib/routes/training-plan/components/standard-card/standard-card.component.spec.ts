

import { ChangeDetectorRef } from '@angular/core'
import { TrainingPlanDataSharingService } from '../../services/training-plan-data-share.service'
import { StandardCardComponent } from './standard-card.component'

describe('StandardCardComponent', () => {
    let component: StandardCardComponent

    const tpdsSvc: Partial<TrainingPlanDataSharingService> = {}
    const changeDetectorRef: Partial<ChangeDetectorRef> = {}

    beforeAll(() => {
        component = new StandardCardComponent(
            tpdsSvc as TrainingPlanDataSharingService,
            changeDetectorRef as ChangeDetectorRef
        )
    })

    beforeEach(() => {
        jest.clearAllMocks()
        jest.resetAllMocks()
    })

    it('should create a instance of component', () => {
        expect(component).toBeTruthy()
    })
})