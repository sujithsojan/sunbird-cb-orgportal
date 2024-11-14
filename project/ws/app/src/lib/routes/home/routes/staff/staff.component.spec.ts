import { MatDialog } from '@angular/material/dialog'
import { MatSnackBar } from '@angular/material/snack-bar'
import { ActivatedRoute } from '@angular/router'
import { MdoInfoService } from '../../services/mdoinfo.service'
import { ConfigurationsService } from '@sunbird-cb/utils'
import { StaffComponent } from './staff.component'

describe('StaffComponent', () => {
    let component: StaffComponent

    const snackBar: Partial<MatSnackBar> = {}
    const dialog: Partial<MatDialog> = {}
    const activeRoute: Partial<ActivatedRoute> = {}
    const configSvc: Partial<ConfigurationsService> = {}
    const mdoinfoSrvc: Partial<MdoInfoService> = {}

    beforeAll(() => {
        component = new StaffComponent(
            snackBar as MatSnackBar,
            dialog as MatDialog,
            activeRoute as ActivatedRoute,
            configSvc as ConfigurationsService,
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