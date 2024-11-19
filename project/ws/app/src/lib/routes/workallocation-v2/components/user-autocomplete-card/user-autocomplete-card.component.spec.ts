import { UserAutocompleteCardComponent } from "./user-autocomplete-card.component"


describe('UserAutocompleteCardComponent', () => {
    let component: UserAutocompleteCardComponent



    beforeAll(() => {
        component = new UserAutocompleteCardComponent(

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