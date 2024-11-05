
import { Router } from '@angular/router'
import { UIDirectoryTableComponent } from './directory-table.component'

describe('UIDirectoryTableComponent', () => {
    let component: UIDirectoryTableComponent

    const router: Partial<Router> = {}

    beforeAll(() => {
        component = new UIDirectoryTableComponent(
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
