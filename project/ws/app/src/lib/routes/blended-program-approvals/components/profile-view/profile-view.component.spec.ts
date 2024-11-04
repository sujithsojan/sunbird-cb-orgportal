
import { MatDialog } from '@angular/material/dialog'
import { ActivatedRoute, ActivatedRouteSnapshot, Router } from '@angular/router'
import { BlendedApporvalService } from '../../services/blended-approval.service'
import { WidgetUserService } from '@sunbird-cb/collection'
import { ProfileViewComponent } from './profile-view.component'
import { of } from 'rxjs'


describe('ProfileViewComponent', () => {
    let component: ProfileViewComponent

    const dialog: Partial<MatDialog> = {}
    const route: Partial<ActivatedRoute> = {
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
    const bpService: Partial<BlendedApporvalService> = {
        getUserById: jest.fn().mockReturnValue(of({}))
    }
    const router: Partial<Router> = {
        getCurrentNavigation: jest.fn()
    }
    const userSvc: Partial<WidgetUserService> = {}

    beforeAll(() => {
        component = new ProfileViewComponent(
            dialog as MatDialog,
            route as ActivatedRoute,
            bpService as BlendedApporvalService,
            router as Router,
            userSvc as WidgetUserService
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