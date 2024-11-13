import { FracService } from '../../services/frac.service'
import { DomSanitizer } from '@angular/platform-browser'
import { FracComponent } from './frac.component'

describe('FracComponent', () => {
    let component: FracComponent

    const domSanitizer: Partial<DomSanitizer> = {}
    const fracService: Partial<FracService> = {}

    beforeAll(() => {
        component = new FracComponent(
            domSanitizer as DomSanitizer,
            fracService as FracService
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
