import { LevelCardComponent } from "./level-card.component"


describe('LevelCardComponent', () => {
    let component: LevelCardComponent



    beforeAll(() => {
        component = new LevelCardComponent(

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