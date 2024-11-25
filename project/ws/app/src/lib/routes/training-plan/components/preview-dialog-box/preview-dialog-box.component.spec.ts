
import { MatDialogRef } from '@angular/material/dialog'
import { PreviewDialogBoxComponent } from './preview-dialog-box.component'

describe('PreviewDialogBoxComponent', () => {
    let component: PreviewDialogBoxComponent

    const data: any = {}
    const dialogRef: Partial<MatDialogRef<PreviewDialogBoxComponent>> = {}

    beforeAll(() => {
        component = new PreviewDialogBoxComponent(
            data as undefined,
            dialogRef as MatDialogRef<PreviewDialogBoxComponent>
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