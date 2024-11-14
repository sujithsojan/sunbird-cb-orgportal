import { MatDialogRef } from '@angular/material/dialog'
import { SelectedDesignationPopupComponent } from './selected-designation-popup.component'

describe('SelectedDesignationPopupComponent', () => {
    let component: SelectedDesignationPopupComponent

    const dialogRef: Partial<MatDialogRef<SelectedDesignationPopupComponent>> = {}
    const dialogData: any = {}

    beforeAll(() => {
        component = new SelectedDesignationPopupComponent(
            dialogRef as MatDialogRef<SelectedDesignationPopupComponent>,
            dialogData as undefined
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