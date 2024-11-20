
import { MatDialogRef } from '@angular/material/dialog'
import { DialogConfirmComponent } from './dialog-confirm.component'
import { IPopData } from './dialog-confirm.component'

describe('DialogConfirmComponent', () => {
    let component: DialogConfirmComponent

    const data: Partial<IPopData> = {}
    const dialogRef: Partial<MatDialogRef<DialogConfirmComponent>> = {}

    beforeAll(() => {
        component = new DialogConfirmComponent(
            data as IPopData,
            dialogRef as MatDialogRef<DialogConfirmComponent>
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
