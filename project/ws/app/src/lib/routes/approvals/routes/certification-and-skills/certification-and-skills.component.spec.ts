
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router'
import { CertificationAndSkillsComponent } from './certification-and-skills.component'
import { of } from 'rxjs'

describe('CertificationAndSkillsComponent', () => {
    let component: CertificationAndSkillsComponent

    const activeRoute: Partial<ActivatedRoute> = {}
    const router: Partial<Router> = {
        events: of(new NavigationEnd(0, '', '')),
    }

    beforeAll(() => {
        component = new CertificationAndSkillsComponent(
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
