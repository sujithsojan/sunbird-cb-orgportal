// tslint:disable
import { ActivatedRoute, Router } from '@angular/router'
import { DomSanitizer } from '@angular/platform-browser'
import { MatDialog } from '@angular/material/dialog'
import { MatSnackBar } from '@angular/material/snack-bar'
import { EventService } from '@sunbird-cb/utils'
import { ApprovalsService } from '../../../services/approvals.service'
import { LoaderService } from '../../../../../../../../../../src/app/services/loader.service'
import { ApprovalPendingComponent } from './approval-pending.component'

describe('ApprovalPendingComponent', () => {
	let component: ApprovalPendingComponent

	const router: Partial<Router> = {}
	const apprService: Partial<ApprovalsService> = {}
	const activeRouter: Partial<ActivatedRoute> = {}
	const route: Partial<ActivatedRoute> = {}
	const events: Partial<EventService> = {}
	const dialog: Partial<MatDialog> = {}
	const sanitizer: Partial<DomSanitizer> = {}
	const snackbar: Partial<MatSnackBar> = {}
	const loaderService: Partial<LoaderService> = {}

	beforeAll(() => {
		component = new ApprovalPendingComponent(
			router as Router,
			apprService as ApprovalsService,
			activeRouter as ActivatedRoute,
			route as ActivatedRoute,
			events as EventService,
			dialog as MatDialog,
			sanitizer as DomSanitizer,
			snackbar as MatSnackBar,
			loaderService as LoaderService
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