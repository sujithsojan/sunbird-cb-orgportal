
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router'
import { BlendedHomeComponent } from './blended-home.component'
import { of } from 'rxjs'

describe('BlendedHomeComponent', () => {
    let component: BlendedHomeComponent

    const router: Partial<Router> = {
        events: of(new NavigationEnd(0, '', '')),
    }
    const activeRoute: Partial<ActivatedRoute> = {}

    beforeAll(() => {
        component = new BlendedHomeComponent(
            router as Router,
            activeRoute as ActivatedRoute
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
