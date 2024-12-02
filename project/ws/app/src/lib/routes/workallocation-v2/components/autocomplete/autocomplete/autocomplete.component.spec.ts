import { AutocompleteComponent } from "./autocomplete.component"


describe('AutocompleteComponent', () => {
    let component: AutocompleteComponent



    beforeAll(() => {
        component = new AutocompleteComponent(

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