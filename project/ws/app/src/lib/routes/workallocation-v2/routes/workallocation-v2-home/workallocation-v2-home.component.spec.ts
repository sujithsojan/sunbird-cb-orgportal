import { WorkallocationV2HomeComponent } from "./workallocation-v2-home.component"


describe('WorkallocationV2HomeComponent', () => {
    let component: WorkallocationV2HomeComponent



    beforeAll(() => {
        component = new WorkallocationV2HomeComponent(

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