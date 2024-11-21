import { MatDialog } from '@angular/material/dialog'
import { MatSnackBar } from '@angular/material/snack-bar'
import { MdoInfoService } from '../../services/mdoinfo.service'
import { ConfigurationsService } from '@sunbird-cb/utils'
import { ActivatedRoute, Router } from '@angular/router'
import { ProfileV2UtillService } from '../../services/home-utill.service'
import { LeadershiptableComponent } from './leadershiptable.component'

describe('LeadershiptableComponent', () => {
    let component: LeadershiptableComponent

    const dialog: Partial<MatDialog> = {}
    const activeRoute: Partial<ActivatedRoute> = {}
    const snackBar: Partial<MatSnackBar> = {}
    const mdoinfoSrvc: Partial<MdoInfoService> = {}
    const configSvc: Partial<ConfigurationsService> = {}
    const router: Partial<Router> = {}
    const profileUtilSvc: Partial<ProfileV2UtillService> = {}

    beforeAll(() => {
        component = new LeadershiptableComponent(
            dialog as MatDialog,
            activeRoute as ActivatedRoute,
            snackBar as MatSnackBar,
            mdoinfoSrvc as MdoInfoService,
            configSvc as ConfigurationsService,
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
