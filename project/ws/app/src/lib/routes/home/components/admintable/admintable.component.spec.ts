import { MatDialog } from '@angular/material/dialog'
import { MatSnackBar } from '@angular/material/snack-bar'
import { MdoInfoService } from '../../services/mdoinfo.service'
import { Router } from '@angular/router'
import { ProfileV2UtillService } from '../../services/home-utill.service'
import { AdmintableComponent } from './admintable.component'

describe('AdmintableComponent', () => {
    let component: AdmintableComponent

    const dialog: Partial<MatDialog> = {}
    const snackBar: Partial<MatSnackBar> = {}
    const mdoinfoSrvc: Partial<MdoInfoService> = {}
    const router: Partial<Router> = {}
    const profileUtilSvc: Partial<ProfileV2UtillService> = {}

    beforeAll(() => {
        component = new AdmintableComponent(
            dialog as MatDialog,
            snackBar as MatSnackBar,
            mdoinfoSrvc as MdoInfoService,
            router as Router,
            profileUtilSvc as ProfileV2UtillService
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