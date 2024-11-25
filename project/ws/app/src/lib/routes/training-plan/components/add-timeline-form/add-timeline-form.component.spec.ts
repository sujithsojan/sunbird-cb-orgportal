
import { DatePipe } from '@angular/common'
import { TrainingPlanDataSharingService } from '../../services/training-plan-data-share.service'
import { AddTimelineFormComponent } from './add-timeline-form.component'

describe('AddTimelineFormComponent', () => {
    let component: AddTimelineFormComponent

    const tpdsSvc: Partial<TrainingPlanDataSharingService> = {}
    const datePipe: Partial<DatePipe> = {}

    beforeAll(() => {
        component = new AddTimelineFormComponent(
            tpdsSvc as TrainingPlanDataSharingService,
            datePipe as DatePipe
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