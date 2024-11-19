
import { DomSanitizer } from '@angular/platform-browser'
import { CustomTourService } from '@sunbird-cb/collection'
import { ConfigurationsService } from '@sunbird-cb/utils'
import { Router } from '@angular/router'
import { AppNavBarComponent } from './app-nav-bar.component'
import { of } from 'rxjs'

describe('AppNavBarComponent', () => {
    let component: AppNavBarComponent

    const domSanitizer: Partial<DomSanitizer> = {}
    const configSvc: Partial<ConfigurationsService> = {}
    const tourService: Partial<CustomTourService> = {}
    const router: Partial<Router> = {
        events: of()
    }

    beforeAll(() => {
        component = new AppNavBarComponent(
            domSanitizer as DomSanitizer,
            configSvc as ConfigurationsService,
            tourService as CustomTourService,
            router as Router
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