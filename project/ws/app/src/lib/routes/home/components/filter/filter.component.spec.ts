import { ChangeDetectorRef } from '@angular/core'
import { TrainingPlanService } from '../../../training-plan/services/traininig-plan.service'
import { UsersService } from '../../../users/services/users.service'
import { FilterComponent } from './filter.component'

describe('FilterComponent', () => {
    let component: FilterComponent

    const cdref: Partial<ChangeDetectorRef> = {}
    const trainingPlanService: Partial<TrainingPlanService> = {}
    const usersSvc: Partial<UsersService> = {}

    beforeAll(() => {
        component = new FilterComponent(
            cdref as ChangeDetectorRef,
            trainingPlanService as TrainingPlanService,
            usersSvc as UsersService
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
