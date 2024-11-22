import '@angular/compiler'
import { Router, ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router'
import { ConfigurationsService, SubapplicationRespondService, ValueService } from '@sunbird-cb/utils'
import { CustomTourService } from '@sunbird-cb/collection'
import { MatDialog } from '@angular/material/dialog'
import { FeaturesComponent } from './features.component'
import { of } from 'rxjs'

describe('FeaturesComponent', () => {
    let component: FeaturesComponent

    const dialog: Partial<MatDialog> = {}
    const router: Partial<Router> = {}
    const activateRoute: Partial<ActivatedRoute> = {
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
        snapshot: {
            data: {
                configService: {
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
            queryParamMap: {
                get: jest.fn(),
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
    } as unknown as ActivatedRoute
    const configurationSvc: Partial<ConfigurationsService> = {}
    const tour: Partial<CustomTourService> = {}
    const respondSvc: Partial<SubapplicationRespondService> = {}
    const valueSvc: Partial<ValueService> = {
        isXSmall$: of(),
    }

    beforeAll(() => {
        component = new FeaturesComponent(
            dialog as MatDialog,
            router as Router,
            activateRoute as ActivatedRoute,
            configurationSvc as ConfigurationsService,
            tour as CustomTourService,
            respondSvc as SubapplicationRespondService,
            valueSvc as ValueService
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
