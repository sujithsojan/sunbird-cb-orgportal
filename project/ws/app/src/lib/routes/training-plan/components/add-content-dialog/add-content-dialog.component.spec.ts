
import { MatDialogRef } from '@angular/material/dialog'
import { TrainingPlanService } from '../../services/traininig-plan.service'
import { AddContentDialogComponent } from './add-content-dialog.component'

describe('AddContentDialogComponent', () => {
    let component: AddContentDialogComponent

    const data: any = {}
    const dialogRef: Partial<MatDialogRef<AddContentDialogComponent>> = {}
    const trainingplanSvc: Partial<TrainingPlanService> = {}

    beforeAll(() => {
        component = new AddContentDialogComponent(
            data as undefined,
            dialogRef as MatDialogRef<AddContentDialogComponent>,
            trainingplanSvc as TrainingPlanService
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