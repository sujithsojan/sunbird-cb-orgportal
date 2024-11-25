import { LevelInfoComponent } from "./level-info.component"


describe('LevelInfoComponent', () => {
    let component: LevelInfoComponent



    beforeAll(() => {
        component = new LevelInfoComponent(

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