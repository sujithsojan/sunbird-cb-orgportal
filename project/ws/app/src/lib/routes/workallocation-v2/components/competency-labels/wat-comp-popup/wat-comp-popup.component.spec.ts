
import { FormBuilder } from '@angular/forms'
import { MatDialogRef } from '@angular/material/dialog'
import { IWatCompPopupData, WatCompPopupComponent } from './wat-comp-popup.component'

describe('WatCompPopupComponent', () => {
    let component: WatCompPopupComponent

    const dialogRef: Partial<MatDialogRef<WatCompPopupComponent>> = {}
    const data: Partial<IWatCompPopupData> = {}
    const formBuilder: Partial<FormBuilder> = {
        array: jest.fn(),
        group: jest.fn()
    }

    beforeAll(() => {
        component = new WatCompPopupComponent(
            dialogRef as MatDialogRef<WatCompPopupComponent>,
            data as IWatCompPopupData,
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