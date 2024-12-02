
import { Router, ActivatedRoute } from '@angular/router'
import { TrainingPlanDataSharingService } from '../../services/training-plan-data-share.service'
import { PreviewPlanComponent } from './preview-plan.component'

describe('PreviewPlanComponent', () => {
    let component: PreviewPlanComponent

    const router: Partial<Router> = {}
    const route: Partial<ActivatedRoute> = {}
    const tpdsSvc: Partial<TrainingPlanDataSharingService> = {}

    beforeAll(() => {
        component = new PreviewPlanComponent(
            router as Router,
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