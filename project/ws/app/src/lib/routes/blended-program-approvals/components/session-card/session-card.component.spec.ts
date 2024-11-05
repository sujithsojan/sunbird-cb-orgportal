import { SessionCardComponent } from './session-card.component'

describe('SessionCardComponent', () => {
    let component: SessionCardComponent

    beforeAll(() => {
        component = new SessionCardComponent(

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
