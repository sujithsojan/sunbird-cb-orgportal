import { AdminsTableComponent } from './admins-table.component'

describe('AdminsTableComponent', () => {
    let component: AdminsTableComponent

    beforeAll(() => {
        component = new AdminsTableComponent(

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
