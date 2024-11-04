
import { ActivatedRoute, ActivatedRouteSnapshot, Router } from '@angular/router'
import { BlendedApporvalService } from '../../services/blended-approval.service'
import { BatchListComponent } from './batch-list.component'
import { of } from 'rxjs'

describe('BatchListComponent', () => {
    let component: BatchListComponent

    const router: Partial<Router> = {
        getCurrentNavigation: jest.fn()
    }
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
    const bpService: Partial<BlendedApporvalService> = {}

    beforeAll(() => {
        component = new BatchListComponent(
            router as Router,
            activeRouter as ActivatedRoute,
            bpService as BlendedApporvalService
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