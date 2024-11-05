
import { of } from 'rxjs'
import { BasicInfoComponent } from './basic-info.component'
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router'

describe('BasicInfoComponent', () => {
    let component: BasicInfoComponent

    const activeRoute: Partial<ActivatedRoute> = {}
    const router: Partial<Router> = {
        events: of(new NavigationEnd(0, '', '')),
    }

    beforeAll(() => {
        component = new BasicInfoComponent(
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
