
import { ActivatedRoute } from '@angular/router'
import { TrainingPlanDataSharingService } from '../../services/training-plan-data-share.service'
import { CreatePlanComponent } from './create-plan.component'

describe('CreatePlanComponent', () => {
    let component: CreatePlanComponent

    const route: Partial<ActivatedRoute> = {}
    const tpdsSvc: Partial<TrainingPlanDataSharingService> = {}

    beforeAll(() => {
        component = new CreatePlanComponent(
            route as ActivatedRoute,
            tpdsSvc as TrainingPlanDataSharingService
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