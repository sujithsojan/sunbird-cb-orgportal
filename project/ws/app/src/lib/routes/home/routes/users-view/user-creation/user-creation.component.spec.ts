import { UserCreationComponent } from "./user-creation.component"


describe('UserCreationComponent', () => {
    let component: UserCreationComponent



    beforeAll(() => {
        component = new UserCreationComponent(

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