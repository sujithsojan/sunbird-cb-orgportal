import { PlatformWalkthroughComponent } from "./platform-walkthrough.component"


describe('PlatformWalkthroughComponent', () => {
    let component: PlatformWalkthroughComponent



    beforeAll(() => {
        component = new PlatformWalkthroughComponent(

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