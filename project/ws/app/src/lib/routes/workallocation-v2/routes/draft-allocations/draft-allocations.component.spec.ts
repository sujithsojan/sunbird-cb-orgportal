
import { MatDialog } from '@angular/material/dialog'
import { Router, ActivatedRoute } from '@angular/router'
import { EventService } from '@sunbird-cb/utils'
import { AllocationService } from '../../services/allocation.service'
import { UploadFileService } from '../../services/uploadfile.service'
import { DraftAllocationsComponent } from './draft-allocations.component'
import { of } from 'rxjs'

describe('DraftAllocationsComponent', () => {
    let component: DraftAllocationsComponent

    const activated: Partial<ActivatedRoute> = {
        queryParamMap: of(),
        params: of()
    }
    const router: Partial<Router> = {}
    const uploadService: Partial<UploadFileService> = {}
    const events: Partial<EventService> = {}
    const dialog: Partial<MatDialog> = {}
    const allocateSrvc: Partial<AllocationService> = {}

    beforeAll(() => {
        component = new DraftAllocationsComponent(
            activated as ActivatedRoute,
            router as Router,
            uploadService as UploadFileService,
            events as EventService,
            dialog as MatDialog,
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