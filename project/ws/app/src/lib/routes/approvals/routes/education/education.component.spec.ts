
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router'
import { EducationComponent } from './education.component'
import { of } from 'rxjs'

describe('EducationComponent', () => {
    let component: EducationComponent

    const activeRoute: Partial<ActivatedRoute> = {}
    const router: Partial<Router> = {
        events: of(new NavigationEnd(0, '', '')),
    }

    beforeAll(() => {
        component = new EducationComponent(
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
