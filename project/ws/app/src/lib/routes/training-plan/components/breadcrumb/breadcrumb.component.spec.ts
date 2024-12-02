
import { MatDialog } from '@angular/material/dialog'
import { MatSnackBar } from '@angular/material/snack-bar'
import { ActivatedRoute, Router } from '@angular/router'
import { TrainingPlanService } from '../../services/traininig-plan.service'
import { TrainingPlanDataSharingService } from '../../services/training-plan-data-share.service'
import { BreadcrumbComponent } from './breadcrumb.component'

describe('BreadcrumbComponent', () => {
    let component: BreadcrumbComponent

    const router: Partial<Router> = {}
    const activeRoute: Partial<ActivatedRoute> = {}
    const dialog: Partial<MatDialog> = {}
    const tpdsSvc: Partial<TrainingPlanDataSharingService> = {}
    const tpSvc: Partial<TrainingPlanService> = {}
    const snackBar: Partial<MatSnackBar> = {}

    beforeAll(() => {
        component = new BreadcrumbComponent(
            router as Router,
            activeRoute as ActivatedRoute,
            dialog as MatDialog,
            tpdsSvc as TrainingPlanDataSharingService,
            tpSvc as TrainingPlanService,
            snackBar as MatSnackBar
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