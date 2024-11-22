
import { BlendedApporvalService } from '../../services/blended-approval.service'
import { MatDialog } from '@angular/material/dialog'
import { LearnerResponsesComponent } from './learner-responses.component'

describe('LearnerResponsesComponent', () => {
    let component: LearnerResponsesComponent
    const bpService: Partial<BlendedApporvalService> = {}
    const dialogue: Partial<MatDialog> = {}

    beforeAll(() => {
        component = new LearnerResponsesComponent(
            bpService as BlendedApporvalService,
            dialogue as MatDialog
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