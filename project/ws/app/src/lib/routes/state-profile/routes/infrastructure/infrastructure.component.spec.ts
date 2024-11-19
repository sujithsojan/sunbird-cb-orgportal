
import { ConfigurationsService } from '@sunbird-cb/utils'
import { OrgProfileService } from '../../services/org-profile.service'
import { MatDialog } from '@angular/material/dialog'
import { InfrastructureComponent } from './infrastructure.component'

describe('InfrastructureComponent', () => {
    let component: InfrastructureComponent

    const orgSvc: Partial<OrgProfileService> = {}
    const configSvc: Partial<ConfigurationsService> = {}
    const dialog: Partial<MatDialog> = {}

    beforeAll(() => {
        component = new InfrastructureComponent(
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