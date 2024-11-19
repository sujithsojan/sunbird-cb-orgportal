(window as any)['env'] = {
	name: 'test-environment',
	sitePath: '/test-site-path',
	karmYogiPath: '/test-karm-yogi-path',
	cbpPath: '/test-cbp-path',
}

import { ChangeDetectorRef, ApplicationRef } from '@angular/core'
import { ActivatedRoute, Router } from '@angular/router'
import { BreadcrumbsOrgService } from '@sunbird-cb/collection'
import { ConfigurationsService, TelemetryService, ValueService, LoggerService, UtilityService, EventService, AuthKeycloakService } from '@sunbird-cb/utils'
import { MobileAppsService } from '../../services/mobile-apps.service'
import { RootService } from './root.service'
import { SwUpdate } from '@angular/service-worker'
import { MatDialog } from '@angular/material/dialog'
import { LoaderService } from '../../services/loader.service'
import { RootComponent } from './root.component'

describe('RootComponent', () => {
	let component: RootComponent

	const router: Partial<Router> = {}
	const route: Partial<ActivatedRoute> = {}
	const appRef: Partial<ApplicationRef> = {}
	const logger: Partial<LoggerService> = {}
	const swUpdate: Partial<SwUpdate> = {}
	const dialog: Partial<MatDialog> = {}
	const configSvc: Partial<ConfigurationsService> = {}
	const valueSvc: Partial<ValueService> = {}
	const telemetrySvc: Partial<TelemetryService> = {}
	const mobileAppsSvc: Partial<MobileAppsService> = {
		init: jest.fn()
	}
	const rootSvc: Partial<RootService> = {}
	const btnBackSvc: Partial<BreadcrumbsOrgService> = {}
	const changeDetector: Partial<ChangeDetectorRef> = {}
	const utilitySvc: Partial<UtilityService> = {}
	const eventSvc: Partial<EventService> = {}
	const authSvc: Partial<AuthKeycloakService> = {}
	const loader: Partial<LoaderService> = {}

	beforeAll(() => {
		component = new RootComponent(
			router as Router,
			route as ActivatedRoute,
			appRef as ApplicationRef,
			logger as LoggerService,
			swUpdate as SwUpdate,
			dialog as MatDialog,
			configSvc as ConfigurationsService,
			valueSvc as ValueService,
			telemetrySvc as TelemetryService,
			mobileAppsSvc as MobileAppsService,
			rootSvc as RootService,
			btnBackSvc as BreadcrumbsOrgService,
			changeDetector as ChangeDetectorRef,
			utilitySvc as UtilityService,
			eventSvc as EventService,
			authSvc as AuthKeycloakService,
			loader as LoaderService
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