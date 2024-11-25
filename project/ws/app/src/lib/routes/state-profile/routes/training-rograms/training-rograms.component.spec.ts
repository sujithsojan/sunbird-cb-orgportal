
import { OrgProfileService } from '../../services/org-profile.service'
import { MatDialog } from '@angular/material/dialog'
import { ConfigurationsService } from '@sunbird-cb/utils'
import { TrainingRogramsComponent } from './training-rograms.component'

describe('TrainingRogramsComponent', () => {
    let component: TrainingRogramsComponent

    const orgSvc: Partial<OrgProfileService> = {}
    const configSvc: Partial<ConfigurationsService> = {}
    const dialog: Partial<MatDialog> = {}

    beforeAll(() => {
        component = new TrainingRogramsComponent(
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