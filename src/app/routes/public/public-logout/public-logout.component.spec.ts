
import { ConfigurationsService } from '@sunbird-cb/utils'
import { ActivatedRoute } from '@angular/router'
import { PublicLogoutComponent } from './public-logout.component'

describe('PublicLogoutComponent', () => {
    let component: PublicLogoutComponent

    const configSvc: Partial<ConfigurationsService> = {}
    const activateRoute: Partial<ActivatedRoute> = {}

    beforeAll(() => {
        component = new PublicLogoutComponent(
            configSvc as ConfigurationsService,
            activateRoute as ActivatedRoute
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
