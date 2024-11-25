import { CapitalizePipe } from "./capitalize.pipe"


describe('CapitalizePipe', () => {
    let component: CapitalizePipe



    beforeAll(() => {
        component = new CapitalizePipe(

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