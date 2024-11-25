(window as any)['env'] = {
	name: 'test-environment',
	sitePath: '/test-site-path',
	karmYogiPath: '/test-karm-yogi-path',
	cbpPath: '/test-cbp-path',
}
import { ChangeDetectorRef } from '@angular/core'
import { ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router'
import { DownloadReportService } from '../../services/download-report.service'
import { DatePipe } from '@angular/common'
import { EventService } from '@sunbird-cb/utils'
import { DomSanitizer } from '@angular/platform-browser'
import { LoaderService } from '../../../../../../../../../src/app/services/loader.service'
import { MatDialog } from '@angular/material/dialog'
import { MatSnackBar } from '@angular/material/snack-bar'
import { ReportsSectionComponent } from './reports-section.component'
import { of } from 'rxjs'

describe('ReportsSectionComponent', () => {
	let component: ReportsSectionComponent

	const activeRouter: Partial<ActivatedRoute> = {
		data: of({
			pageData: {
				data: {
					bulkUploadConfig: {
						pageSize: 10,
						pageSizeOptions: [10, 20, 30],
					},
				},
			},
		}),
		parent: {
			snapshot: {
				data: {
					configService: {
						unMappedUser: 'user',
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
			url: [],
			params: {},
			queryParams: {},
			fragment: null,
			outlet: 'primary',
			component: null,
		}
	} as unknown as ActivatedRoute
	const downloadService: Partial<DownloadReportService> = {}
	const datePipe: Partial<DatePipe> = {}
	const dialog: Partial<MatDialog> = {}
	const events: Partial<EventService> = {}
	const snackBar: Partial<MatSnackBar> = {}
	const sanitizer: Partial<DomSanitizer> = {}
	const changeDetector: Partial<ChangeDetectorRef> = {}
	const loaderService: Partial<LoaderService> = {}

	beforeAll(() => {
		component = new ReportsSectionComponent(
			activeRouter as ActivatedRoute,
			downloadService as DownloadReportService,
			datePipe as DatePipe,
			dialog as MatDialog,
			events as EventService,
			snackBar as MatSnackBar,
			sanitizer as DomSanitizer,
			changeDetector as ChangeDetectorRef,
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