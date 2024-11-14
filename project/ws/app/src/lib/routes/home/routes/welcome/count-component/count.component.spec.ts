import '@angular/compiler'
import { CountComponent } from "./count.component"


describe('CountComponent', () => {
    let component: CountComponent



    beforeAll(() => {
        component = new CountComponent(

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