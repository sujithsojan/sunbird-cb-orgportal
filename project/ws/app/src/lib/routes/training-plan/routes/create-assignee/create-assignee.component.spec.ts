
import { TrainingPlanDataSharingService } from './../../services/training-plan-data-share.service'
import { CreateAssigneeComponent } from './create-assignee.component'

describe('CreateAssigneeComponent', () => {
    let component: CreateAssigneeComponent

    const tpdsSvc: Partial<TrainingPlanDataSharingService> = {}

    beforeAll(() => {
        component = new CreateAssigneeComponent(
            tpdsSvc as TrainingPlanDataSharingService
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