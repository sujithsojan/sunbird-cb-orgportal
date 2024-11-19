
import { FormBuilder } from '@angular/forms'
import { AllocationService } from '../../services/allocation.service'
import { WatStoreService } from '../../services/wat.store.service'
import { OfficerComponent } from './officer.component'

describe('OfficerComponent', () => {
    let component: OfficerComponent

    const allocateSrvc: Partial<AllocationService> = {}
    const formBuilder: Partial<FormBuilder> = {}
    const watStore: Partial<WatStoreService> = {}

    beforeAll(() => {
        component = new OfficerComponent(
            allocateSrvc as AllocationService,
            formBuilder as FormBuilder,
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