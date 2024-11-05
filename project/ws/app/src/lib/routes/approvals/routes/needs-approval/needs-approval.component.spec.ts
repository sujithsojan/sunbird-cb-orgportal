
import { NeedApprovalsService } from '../../services/need-approvals.service'
import { MatDialog } from '@angular/material/dialog'
import { MatSnackBar } from '@angular/material/snack-bar'
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router'
import { EventService } from '@sunbird-cb/utils'
import { NeedsApprovalComponent } from './needs-approval.component'
import { of } from 'rxjs'

describe('NeedsApprovalComponent', () => {
    let component: NeedsApprovalComponent

    const needApprService: Partial<NeedApprovalsService> = {}
    const activeRoute: Partial<ActivatedRoute> = {
        data: of({ pageData: { data: { profileData: {} } } }),
    }
    const router: Partial<Router> = {
        events: of(new NavigationEnd(0, '', '')),
    }
    const events: Partial<EventService> = {}
    const dialog: Partial<MatDialog> = {}
    const matSnackBar: Partial<MatSnackBar> = {}

    beforeAll(() => {
        component = new NeedsApprovalComponent(
            needApprService as NeedApprovalsService,
            activeRoute as ActivatedRoute,
            router as Router,
            events as EventService,
            dialog as MatDialog,
            matSnackBar as MatSnackBar
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
