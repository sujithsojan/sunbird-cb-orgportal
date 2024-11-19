
import { MatDialog } from '@angular/material/dialog'
import { MatSnackBar } from '@angular/material/snack-bar'
import { ActivatedRoute, Router } from '@angular/router'
import { ConfigurationsService } from '@sunbird-cb/utils'
import { OrgProfileService } from '../../services/org-profile.service'
import { InstituteProfileComponent } from './institute-profile.component'

describe('InstituteProfileComponent', () => {
    let component: InstituteProfileComponent

    const configSvc: Partial<ConfigurationsService> = {}
    const orgSvc: Partial<OrgProfileService> = {}
    const snackBar: Partial<MatSnackBar> = {}
    const router: Partial<Router> = {}
    const dialog: Partial<MatDialog> = {}
    const route: Partial<ActivatedRoute> = {}

    beforeAll(() => {
        component = new InstituteProfileComponent(
            configSvc as ConfigurationsService,
            orgSvc as OrgProfileService,
            snackBar as MatSnackBar,
            router as Router,
            dialog as MatDialog,
            route as ActivatedRoute
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