
import { ExportAsService } from 'ngx-export-as'
import { AllocationService } from '../../services/allocation.service'
import { ActivatedRoute } from '@angular/router'
import { PublishedAllocationsComponent } from './published-allocations.component'
import { of } from 'rxjs'

describe('PublishedAllocationsComponent', () => {
    let component: PublishedAllocationsComponent

    const activated: Partial<ActivatedRoute> = {
        params: of()
    }
    const exportAsService: Partial<ExportAsService> = {}
    const allocateSrvc: Partial<AllocationService> = {}

    beforeAll(() => {
        component = new PublishedAllocationsComponent(
            activated as ActivatedRoute,
            exportAsService as ExportAsService,
            allocateSrvc as AllocationService
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