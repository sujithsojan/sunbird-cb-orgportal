
import { MatDialog } from '@angular/material/dialog'
import { MatSnackBar } from '@angular/material/snack-bar'
import { ActivatedRoute, Router } from '@angular/router'
import { EventService } from '@sunbird-cb/utils'
import { AllocationService } from '../../services/allocation.service'
import { WatStoreService } from '../../services/wat.store.service'
import { CreateWorkallocationComponent } from './create-workallocation.component'
import { of } from 'rxjs'

describe('CreateWorkallocationComponent', () => {
    let component: CreateWorkallocationComponent

    const watStore: Partial<WatStoreService> = {}
    const allocateSrvc: Partial<AllocationService> = {}
    const snackBar: Partial<MatSnackBar> = {
        open: jest.fn()
    }
    const router: Partial<Router> = {}
    const route: Partial<ActivatedRoute> = {
        params: of({ id: '123' })
    }
    const document: Partial<Document> = {}
    const dialog: Partial<MatDialog> = {}
    const events: Partial<EventService> = {}

    beforeAll(() => {
        component = new CreateWorkallocationComponent(
            watStore as WatStoreService,
            allocateSrvc as AllocationService,
            snackBar as MatSnackBar,
            router as Router,
            route as ActivatedRoute,
            document as Document,
            dialog as MatDialog,
            events as EventService
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