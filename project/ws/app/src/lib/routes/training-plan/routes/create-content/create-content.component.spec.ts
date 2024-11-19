
import { TrainingPlanDataSharingService } from './../../services/training-plan-data-share.service'
import { MatDialog } from '@angular/material/dialog'
import { Router } from '@angular/router'
import { CreateContentComponent } from './create-content.component'

describe('CreateContentComponent', () => {
    let component: CreateContentComponent

    const tpdsSvc: Partial<TrainingPlanDataSharingService> = {}
    const dialog: Partial<MatDialog> = {}
    const router: Partial<Router> = {}

    beforeAll(() => {
        component = new CreateContentComponent(
            tpdsSvc as TrainingPlanDataSharingService,
            dialog as MatDialog,
            router as Router
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