
import { ChangeDetectorRef } from '@angular/core'
import { TrainingPlanDataSharingService } from '../../services/training-plan-data-share.service'
import { UserCardComponent } from './user-card.component'

describe('UserCardComponent', () => {
    let component: UserCardComponent

    const tpdsSvc: Partial<TrainingPlanDataSharingService> = {}
    const changeDetectorRef: Partial<ChangeDetectorRef> = {}

    beforeAll(() => {
        component = new UserCardComponent(
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