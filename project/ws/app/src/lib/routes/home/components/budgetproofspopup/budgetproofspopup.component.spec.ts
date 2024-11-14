import { MatDialogRef } from '@angular/material/dialog'
import { UploadService } from '../../services/upload.service'
import { BudgetproofspopupComponent } from './budgetproofspopup.component'
import { of } from 'rxjs'

describe('BudgetproofspopupComponent', () => {
    let component: BudgetproofspopupComponent

    const dialogRef: Partial<MatDialogRef<BudgetproofspopupComponent>> = {}
    const data: any = {}
    const uploadService: Partial<UploadService> = {
        getProfile: jest.fn(() => of({})),
    }

    beforeAll(() => {
        component = new BudgetproofspopupComponent(
            dialogRef as MatDialogRef<BudgetproofspopupComponent>,
            data as undefined,
            uploadService as UploadService
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
