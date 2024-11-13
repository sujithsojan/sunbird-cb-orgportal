// tslint:disable
import { ApprovalsComponent } from "./approvals.component"


describe('ApprovalsComponent', () => {
    let component: ApprovalsComponent



    beforeAll(() => {
        component = new ApprovalsComponent(

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