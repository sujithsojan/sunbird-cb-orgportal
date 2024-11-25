import { InitialAvatarComponent } from "./initial-avatar.component"


describe('InitialAvatarComponent', () => {
    let component: InitialAvatarComponent



    beforeAll(() => {
        component = new InitialAvatarComponent(

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