
import { FormBuilder } from '@angular/forms'
import { TrainingPlanDataSharingService } from '../../services/training-plan-data-share.service'
import { AddPlanInformationComponent } from './add-plan-information.component'

describe('AddPlanInformationComponent', () => {
    let component: AddPlanInformationComponent

    const formBuilder: Partial<FormBuilder> = {}
    const tpdsSvc: Partial<TrainingPlanDataSharingService> = {}

    beforeAll(() => {
        component = new AddPlanInformationComponent(
            formBuilder as FormBuilder,
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