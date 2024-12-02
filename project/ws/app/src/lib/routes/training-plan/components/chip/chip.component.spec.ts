
import { TrainingPlanDataSharingService } from '../../services/training-plan-data-share.service'
import { MatDialog } from '@angular/material/dialog'
import { ChipComponent } from './chip.component'

describe('ChipComponent', () => {
    let component: ChipComponent

    const tpdsSvc: Partial<TrainingPlanDataSharingService> = {}
    const dialog: Partial<MatDialog> = {}

    beforeAll(() => {
        component = new ChipComponent(
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