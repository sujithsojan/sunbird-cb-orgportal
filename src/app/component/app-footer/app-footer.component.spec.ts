
import { ConfigurationsService, ValueService } from '@sunbird-cb/utils'
import { AppFooterComponent } from './app-footer.component'
import { of } from 'rxjs'

describe('AppFooterComponent', () => {
    let component: AppFooterComponent

    const configSvc: Partial<ConfigurationsService> = {}
    const valueSvc: Partial<ValueService> = {
        isXSmall$: of(),
    }

    beforeAll(() => {
        component = new AppFooterComponent(
            configSvc as ConfigurationsService,
            valueSvc as ValueService
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
