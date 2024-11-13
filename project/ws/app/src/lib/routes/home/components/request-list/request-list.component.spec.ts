import { DomSanitizer } from '@angular/platform-browser'
import { ProfileV2Service } from '../../services/home.servive'
import { DatePipe } from '@angular/common'
import { ActivatedRoute, Router } from '@angular/router'
import { MatDialog } from '@angular/material/dialog'
import { MatSnackBar } from '@angular/material/snack-bar'
import { LoaderService } from '../../../../../../../../../src/app/services/loader.service'
import { RequestListComponent } from './request-list.component'


describe('RequestListComponent', () => {
    let component: RequestListComponent

    const sanitizer: Partial<DomSanitizer> = {}
    const homeService: Partial<ProfileV2Service> = {}
    const datePipe: Partial<DatePipe> = {}
    const activeRoute: Partial<ActivatedRoute> = {}
    const dialog: Partial<MatDialog> = {}
    const router: Partial<Router> = {}
    const snackBar: Partial<MatSnackBar> = {}
    const loaderService: Partial<LoaderService> = {}

    beforeAll(() => {
        component = new RequestListComponent(
            sanitizer as DomSanitizer,
            homeService as ProfileV2Service,
            datePipe as DatePipe,
            activeRoute as ActivatedRoute,
            dialog as MatDialog,
            router as Router,
            snackBar as MatSnackBar,
            loaderService as LoaderService
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