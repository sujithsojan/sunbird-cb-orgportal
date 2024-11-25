
import { MatDialogRef } from '@angular/material/dialog'
import { TrainingPlanDataSharingService } from '../../services/training-plan-data-share.service'
import { ConfirmationBoxComponent } from './confirmation.box.component'

describe('ConfirmationBoxComponent', () => {
    let component: ConfirmationBoxComponent

    const data: any = {}
    const dialogRef: Partial<MatDialogRef<ConfirmationBoxComponent>> = {}
    const tpdsSvc: Partial<TrainingPlanDataSharingService> = {}

    beforeAll(() => {
        component = new ConfirmationBoxComponent(
            data as undefined,
            dialogRef as MatDialogRef<ConfirmationBoxComponent>,
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