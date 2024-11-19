
import { WatStoreService } from '../../services/wat.store.service'
import { AssistantMessageCardComponent } from './assistant-message-card.component'

describe('AssistantMessageCardComponent', () => {
    let component: AssistantMessageCardComponent

    const watStore: Partial<WatStoreService> = {}

    beforeAll(() => {
        component = new AssistantMessageCardComponent(
            watStore as WatStoreService
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