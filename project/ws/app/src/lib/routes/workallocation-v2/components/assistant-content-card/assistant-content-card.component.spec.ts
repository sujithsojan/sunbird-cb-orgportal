
import { MatDialog } from '@angular/material/dialog'
import { AssistantContentCardComponent } from './assistant-content-card.component'

describe('AssistantContentCardComponent', () => {
    let component: AssistantContentCardComponent

    const dialog: Partial<MatDialog> = {}

    beforeAll(() => {
        component = new AssistantContentCardComponent(
            dialog as MatDialog
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