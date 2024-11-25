
import { Platform } from '@angular/cdk/platform'
import { DomSanitizer } from '@angular/platform-browser'
import { ActivatedRoute } from '@angular/router'
import { ConfigurationsService } from '@sunbird-cb/utils'
import { MobileAppsService } from 'src/app/services/mobile-apps.service'
import { MobileAppHomeComponent } from './mobile-app-home.component'

describe('MobileAppHomeComponent', () => {
    let component: MobileAppHomeComponent

    const sanitizer: Partial<DomSanitizer> = {}
    const route: Partial<ActivatedRoute> = {}
    const matPlatform: Partial<Platform> = {}
    const mobileService: Partial<MobileAppsService> = {}
    const configSvc: Partial<ConfigurationsService> = {}

    beforeAll(() => {
        component = new MobileAppHomeComponent(
            sanitizer as DomSanitizer,
            route as ActivatedRoute,
            matPlatform as Platform,
            mobileService as MobileAppsService,
            configSvc as ConfigurationsService
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
