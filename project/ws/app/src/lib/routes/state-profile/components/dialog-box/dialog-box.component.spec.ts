
import { MatDialogRef } from '@angular/material/dialog'
import { DialogBoxComponent } from './dialog-box.component'

describe('DialogBoxComponent', () => {
    let component: DialogBoxComponent

    const data: any = {}
    const dialogRef: Partial<MatDialogRef<DialogBoxComponent>> = {}

    beforeAll(() => {
        component = new DialogBoxComponent(
            data as any,
            dialogRef as MatDialogRef<DialogBoxComponent>
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