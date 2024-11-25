import { WelcomeOnboardComponent } from "./welcome-onboard.component"


describe('WelcomeOnboardComponent', () => {
    let component: WelcomeOnboardComponent



    beforeAll(() => {
        component = new WelcomeOnboardComponent(

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