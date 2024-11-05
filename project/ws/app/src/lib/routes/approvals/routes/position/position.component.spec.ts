
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router'
import { PositionComponent } from './position.component'
import { of } from 'rxjs'

describe('PositionComponent', () => {
    let component: PositionComponent

    const activeRoute: Partial<ActivatedRoute> = {}
    const router: Partial<Router> = {
        events: of(new NavigationEnd(0, '', '')),
    }

    beforeAll(() => {
        component = new PositionComponent(
            activeRoute as ActivatedRoute,
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
