
import { WorkallocationService } from './../../../routes/home/services/workallocation.service'
import { MatDialog } from '@angular/material/dialog'
import { MatSnackBar } from '@angular/material/snack-bar'
import { Router, ActivatedRoute } from '@angular/router'
import { CreateMDOService } from '../create-mdo.services'
import { WorkAllocationTableComponent } from './table.component'

describe('WorkAllocationTableComponent', () => {
    let component: WorkAllocationTableComponent

    const router: Partial<Router> = {}
    const dialog: Partial<MatDialog> = {}
    const activatedRoute: Partial<ActivatedRoute> = {}
    const createMDOService: Partial<CreateMDOService> = {}
    const snackBar: Partial<MatSnackBar> = {}
    const wrkAllocServ: Partial<WorkallocationService> = {}

    beforeAll(() => {
        component = new WorkAllocationTableComponent(
            router as Router,
            dialog as MatDialog,
            activatedRoute as ActivatedRoute,
            createMDOService as CreateMDOService,
            snackBar as MatSnackBar,
            wrkAllocServ as WorkallocationService
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