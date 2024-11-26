
import { MatDialogRef } from '@angular/material/dialog'
import { BudgetschemepopupComponent } from './budgetschemepopup.component'

describe('BudgetschemepopupComponent', () => {
    let component: BudgetschemepopupComponent

    const dialogRef: Partial<MatDialogRef<BudgetschemepopupComponent>> = {}
    const data: any = {}

    beforeAll(() => {
        component = new BudgetschemepopupComponent(
            dialogRef as MatDialogRef<BudgetschemepopupComponent>,
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