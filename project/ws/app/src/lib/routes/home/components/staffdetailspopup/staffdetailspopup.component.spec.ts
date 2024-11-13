
import { MatDialogRef } from '@angular/material/dialog'
import { MdoInfoService } from '../../services/mdoinfo.service'
import { StaffdetailspopupComponent } from './staffdetailspopup.component'

describe('StaffdetailspopupComponent', () => {
    let component: StaffdetailspopupComponent

    const dialogRef: Partial<MatDialogRef<StaffdetailspopupComponent>> = {}
    const data: any = {}
    const mdoinfoSrvc: Partial<MdoInfoService> = {}

    beforeAll(() => {
        component = new StaffdetailspopupComponent(
            dialogRef as MatDialogRef<StaffdetailspopupComponent>,
            data as undefined,
            mdoinfoSrvc as MdoInfoService
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
