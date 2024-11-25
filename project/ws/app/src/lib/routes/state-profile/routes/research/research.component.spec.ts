
import { OrgProfileService } from '../../services/org-profile.service'
import { MatDialog } from '@angular/material/dialog'
import { MatSnackBar } from '@angular/material/snack-bar'
import { ConfigurationsService } from '@sunbird-cb/utils'
import { Router } from '@angular/router'
import { ResearchComponent } from './research.component'


describe('ResearchComponent', () => {
    let component: ResearchComponent

    const orgSvc: Partial<OrgProfileService> = {
        updateFormStatus: jest.fn()
    }
    const snackBar: Partial<MatSnackBar> = {}
    const configSvc: Partial<ConfigurationsService> = {}
    const router: Partial<Router> = {}
    const dialog: Partial<MatDialog> = {}

    beforeAll(() => {
        component = new ResearchComponent(
            orgSvc as OrgProfileService,
            snackBar as MatSnackBar,
            configSvc as ConfigurationsService,
            router as Router,
            dialog as MatDialog
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