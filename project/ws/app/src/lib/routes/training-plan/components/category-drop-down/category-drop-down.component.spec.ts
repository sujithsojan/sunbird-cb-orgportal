
import { MatDialog } from '@angular/material/dialog'
import { TrainingPlanDataSharingService } from '../../services/training-plan-data-share.service'
import { CategoryDropDownComponent } from './category-drop-down.component'

describe('CategoryDropDownComponent', () => {
    let component: CategoryDropDownComponent

    const dialog: Partial<MatDialog> = {}
    const tpdsSvc: Partial<TrainingPlanDataSharingService> = {}

    beforeAll(() => {
        component = new CategoryDropDownComponent(
            dialog as MatDialog,
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