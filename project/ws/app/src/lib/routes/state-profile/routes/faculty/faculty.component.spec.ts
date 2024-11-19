
import { OrgProfileService } from '../../services/org-profile.service'
import { ConfigurationsService } from '@sunbird-cb/utils'
import { MatDialog } from '@angular/material/dialog'
import { FacultyComponent } from './faculty.component'

describe('FacultyComponent', () => {
    let component: FacultyComponent

    const orgSvc: Partial<OrgProfileService> = {}
    const configSvc: Partial<ConfigurationsService> = {}
    const dialog: Partial<MatDialog> = {}

    beforeAll(() => {
        component = new FacultyComponent(
            orgSvc as OrgProfileService,
            configSvc as ConfigurationsService,
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