
import { FormBuilder } from '@angular/forms'
import { MatDialogRef } from '@angular/material/dialog'
import { IWatRolePopupData, WatRolePopupComponent } from './wat-role-popup.component'

describe('WatRolePopupComponent', () => {
    let component: WatRolePopupComponent

    const dialogRef: Partial<MatDialogRef<WatRolePopupComponent>> = {}
    const data: Partial<IWatRolePopupData> = {}
    const formBuilder: Partial<FormBuilder> = {
        array: jest.fn(),
        group: jest.fn()
    }

    beforeAll(() => {
        component = new WatRolePopupComponent(
            dialogRef as MatDialogRef<WatRolePopupComponent>,
            data as IWatRolePopupData,
            formBuilder as FormBuilder
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