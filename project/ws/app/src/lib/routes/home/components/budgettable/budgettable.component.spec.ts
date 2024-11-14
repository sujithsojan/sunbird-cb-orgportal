import { BudgettableComponent } from './budgettable.component'

describe('BudgettableComponent', () => {
    let component: BudgettableComponent

    beforeAll(() => {
        component = new BudgettableComponent(

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
