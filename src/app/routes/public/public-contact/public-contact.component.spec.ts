
import { ConfigurationsService } from '@sunbird-cb/utils'
import { ActivatedRoute } from '@angular/router'
import { PublicContactComponent } from './public-contact.component'

describe('PublicContactComponent', () => {
    let component: PublicContactComponent

    const configSvc: Partial<ConfigurationsService> = {}
    const activateRoute: Partial<ActivatedRoute> = {}

    beforeAll(() => {
        component = new PublicContactComponent(
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
