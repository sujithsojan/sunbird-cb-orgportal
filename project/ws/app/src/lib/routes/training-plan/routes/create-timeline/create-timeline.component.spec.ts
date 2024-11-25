
import { TrainingPlanDataSharingService } from '../../services/training-plan-data-share.service'
import { MatDialog } from '@angular/material/dialog'
import { CreateTimelineComponent } from './create-timeline.component'

describe('CreateTimelineComponent', () => {
    let component: CreateTimelineComponent

    const tpdsSvc: Partial<TrainingPlanDataSharingService> = {}
    const dialog: Partial<MatDialog> = {}

    beforeAll(() => {
        component = new CreateTimelineComponent(
            tpdsSvc as TrainingPlanDataSharingService,
            dialog as MatDialog
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