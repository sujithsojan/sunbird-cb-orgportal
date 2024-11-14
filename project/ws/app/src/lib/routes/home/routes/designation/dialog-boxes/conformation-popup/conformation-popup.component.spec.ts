import { MatDialogRef } from '@angular/material/dialog'
import { ConformationPopupComponent } from './conformation-popup.component'

describe('ConformationPopupComponent', () => {
    let component: ConformationPopupComponent

    const dialogRef: Partial<MatDialogRef<ConformationPopupComponent>> = {}
    const data: any = {}

    beforeAll(() => {
        component = new ConformationPopupComponent(
            dialogRef as MatDialogRef<ConformationPopupComponent>,
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