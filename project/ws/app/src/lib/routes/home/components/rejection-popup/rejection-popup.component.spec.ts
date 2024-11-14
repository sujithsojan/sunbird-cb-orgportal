import { MatDialogRef } from '@angular/material/dialog'
import { RejectionPopupComponent } from './rejection-popup.component'

describe('RejectionPopupComponent', () => {
    let component: RejectionPopupComponent

    const dialogRef: Partial<MatDialogRef<RejectionPopupComponent>> = {}
    const data: any = {}

    beforeAll(() => {
        component = new RejectionPopupComponent(
            dialogRef as MatDialogRef<RejectionPopupComponent>,
            data as undefined
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
