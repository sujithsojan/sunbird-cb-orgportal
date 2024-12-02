
import { MatDialogRef } from '@angular/material/dialog'
import { FormBuilder } from '@angular/forms'
import { AllocationService } from '../../services/allocation.service'
import { AllocationActionsComponent } from './allocation-actions.component'

describe('AllocationActionsComponent', () => {
    let component: AllocationActionsComponent

    const allocateSrvc: Partial<AllocationService> = {}
    const fb: Partial<FormBuilder> = {
        group: jest.fn(),
        array: jest.fn()
    }
    const dialogRef: Partial<MatDialogRef<AllocationActionsComponent>> = {}
    const selectedUser: any = {}

    beforeAll(() => {
        component = new AllocationActionsComponent(
            allocateSrvc as AllocationService,
            fb as FormBuilder,
            dialogRef as MatDialogRef<AllocationActionsComponent>,
            selectedUser as undefined
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