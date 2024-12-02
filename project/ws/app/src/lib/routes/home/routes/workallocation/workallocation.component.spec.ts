
import { MatDialog } from '@angular/material/dialog'
import { Router, ActivatedRoute } from '@angular/router'
import { ExportAsService } from 'ngx-export-as'
import { WorkallocationService } from '../../services/workallocation.service'
import { EventService } from '@sunbird-cb/utils'
import { WorkallocationComponent } from './workallocation.component'

describe('WorkallocationComponent', () => {
	let component: WorkallocationComponent

	const exportAsService: Partial<ExportAsService> = {}
	const router: Partial<Router> = {}
	const wrkAllocServ: Partial<WorkallocationService> = {}
	const workallocationSrvc: Partial<WorkallocationService> = {}
	const activeRoute: Partial<ActivatedRoute> = {}
	const events: Partial<EventService> = {}
	const route: Partial<ActivatedRoute> = {}
	const dialog: Partial<MatDialog> = {}
	const eventSvc: Partial<EventService> = {}

	beforeAll(() => {
		component = new WorkallocationComponent(
			exportAsService as ExportAsService,
			router as Router,
			wrkAllocServ as WorkallocationService,
			workallocationSrvc as WorkallocationService,
			activeRoute as ActivatedRoute,
			events as EventService,
			route as ActivatedRoute,
			dialog as MatDialog,
			eventSvc as EventService
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