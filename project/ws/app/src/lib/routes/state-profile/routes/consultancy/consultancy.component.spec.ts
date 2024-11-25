
import { OrgProfileService } from '../../services/org-profile.service'
import { ConfigurationsService } from '@sunbird-cb/utils'
import { Router } from '@angular/router'
import { MatDialog } from '@angular/material/dialog'
import { MatSnackBar } from '@angular/material/snack-bar'
import { ConsultancyComponent } from './consultancy.component'

describe('ConsultancyComponent', () => {
    let component: ConsultancyComponent

    const orgSvc: Partial<OrgProfileService> = {
        updateFormStatus: jest.fn()
    }
    const configSvc: Partial<ConfigurationsService> = {}
    const router: Partial<Router> = {}
    const dialog: Partial<MatDialog> = {}
    const snackBar: Partial<MatSnackBar> = {}

    beforeAll(() => {
        component = new ConsultancyComponent(
            orgSvc as OrgProfileService,
            configSvc as ConfigurationsService,
            router as Router,
            dialog as MatDialog,
            snackBar as MatSnackBar
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