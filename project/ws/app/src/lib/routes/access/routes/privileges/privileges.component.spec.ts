
import { PrivilegesComponent } from './privileges.component'

describe('PrivilegesComponent', () => {
    let component: PrivilegesComponent

    beforeAll(() => {
        component = new PrivilegesComponent(

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
