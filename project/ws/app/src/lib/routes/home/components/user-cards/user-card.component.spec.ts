(window as any)['env'] = {
	name: 'test-environment',
	sitePath: '/test-site-path',
	karmYogiPath: '/test-karm-yogi-path',
	cbpPath: '/test-cbp-path',
}

import { ChangeDetectorRef } from '@angular/core'
import { UsersService } from '../../../users/services/users.service'
import { MatDialog } from '@angular/material/dialog'
import { MatSnackBar } from '@angular/material/snack-bar'
import { RolesService } from '../../../users/services/roles.service'
import { ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router'
import { ApprovalsService } from '../../services/approvals.service'
import { EventService } from '@sunbird-cb/utils'
import { DatePipe } from '@angular/common'
import { UserCardComponent } from './user-card.component'

describe('UserCardComponent', () => {
	let component: UserCardComponent

	const usersSvc: Partial<UsersService> = {}
	const roleservice: Partial<RolesService> = {}
	const dialog: Partial<MatDialog> = { open: jest.fn() }
	const approvalSvc: Partial<ApprovalsService> = {}
	const route: Partial<ActivatedRoute> = {
		snapshot: {
			data: {
				configService: {
					unMappedUser: {
						rootOrgId: 'sampleRootOrgId',
					},
					userProfile: {
						rootOrgId: 'sampleRootOrgId',
						userProfileV2: {
							email: 'test@example.com',
							mobile: '1234567890',
						},
						orgReadData: {
							frameworkid: 'sampleFrameworkId',
						},
					},
				},
			},
			url: [],
			params: {},
			queryParams: {},
			fragment: null,
			outlet: 'primary',
			component: null,
		} as unknown as ActivatedRouteSnapshot,
		outlet: 'primary',
		component: null,
	}
	const snackBar: Partial<MatSnackBar> = { open: jest.fn() }
	const events: Partial<EventService> = {}
	const datePipe: Partial<DatePipe> = { transform: jest.fn() }
	const cdr: Partial<ChangeDetectorRef> = {}

	beforeAll(() => {
		component = new UserCardComponent(
			usersSvc as UsersService,
			roleservice as RolesService,
			dialog as MatDialog,
			approvalSvc as ApprovalsService,
			route as ActivatedRoute,
			snackBar as MatSnackBar,
			events as EventService,
			datePipe as DatePipe,
			cdr as ChangeDetectorRef
		)
	})

	beforeEach(() => {
		jest.clearAllMocks()
		jest.resetAllMocks()
	})

	it('should create an instance of the component', () => {
		expect(component).toBeTruthy()
	})
})
