import { BreakpointObserver } from '@angular/cdk/layout'
import { DomSanitizer } from '@angular/platform-browser'
import { ConfigurationsService } from '@sunbird-cb/utils'
import { ActivatedRoute } from '@angular/router'
import { AboutHomeComponent } from './about-home.component'
import { of } from 'rxjs'

describe('AboutHomeComponent', () => {
    let component: AboutHomeComponent

    const breakpointObserver: Partial<BreakpointObserver> = {
        observe: jest.fn().mockReturnValue(of({ matches: true })) // Mocking observe to return an observable
    }
    const domSanitizer: Partial<DomSanitizer> = {}
    const configSvc: Partial<ConfigurationsService> = {}
    const activateRoute: Partial<ActivatedRoute> = {}

    beforeAll(() => {
        component = new AboutHomeComponent(
            breakpointObserver as BreakpointObserver,
            domSanitizer as DomSanitizer,
            configSvc as ConfigurationsService,
            activateRoute as ActivatedRoute
        )
    })

    beforeEach(() => {
        jest.clearAllMocks()
        jest.resetAllMocks()
    })

    it('should create an instance of the component', () => {
        expect(component).toBeTruthy()
    })

    it('should detect small screen size when Breakpoints.XSmall matches', (done) => {
        component.isSmallScreen$.subscribe(isSmall => {
            expect(isSmall).toBe(true) // Modify based on your desired test condition
            done()
        })
    })
})
