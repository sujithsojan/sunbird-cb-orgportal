
import { MatDialog } from '@angular/material/dialog'
import { MatSnackBar } from '@angular/material/snack-bar'
import { ActivatedRoute, ActivatedRouteSnapshot, Router } from '@angular/router'
import { BlendedApporvalService } from '../../services/blended-approval.service'
import { EventService } from '@sunbird-cb/utils'
import { BatchDetailsComponent } from './batch-details.component'
import { of } from 'rxjs'

describe('BatchDetailsComponent', () => {
    let component: BatchDetailsComponent

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
    const snackBar: Partial<MatSnackBar> = {}
    const events: Partial<EventService> = {}
    const dialogue: Partial<MatDialog> = {}

    beforeAll(() => {
        component = new BatchDetailsComponent(
            router as Router,
            activeRouter as ActivatedRoute,
            bpService as BlendedApporvalService,
            snackBar as MatSnackBar,
            events as EventService,
            dialogue as MatDialog
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