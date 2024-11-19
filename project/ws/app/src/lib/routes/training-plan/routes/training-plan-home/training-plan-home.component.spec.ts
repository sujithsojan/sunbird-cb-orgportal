
import { TrainingPlanDataSharingService } from '../../services/training-plan-data-share.service'
import { ActivatedRoute } from '@angular/router'
import { TrainingPlanHomeComponent } from './training-plan-home.component'

describe('TrainingPlanHomeComponent', () => {
    let component: TrainingPlanHomeComponent

    const tpdsSvc: Partial<TrainingPlanDataSharingService> = {}
    const activeRoute: Partial<ActivatedRoute> = {}

    beforeAll(() => {
        component = new TrainingPlanHomeComponent(
            tpdsSvc as TrainingPlanDataSharingService,
            activeRoute as ActivatedRoute
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