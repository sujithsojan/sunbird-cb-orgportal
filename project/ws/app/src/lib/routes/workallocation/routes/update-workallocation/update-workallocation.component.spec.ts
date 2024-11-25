
import { FormBuilder } from '@angular/forms'
import { ExportAsService } from 'ngx-export-as'
import { ActivatedRoute, ActivatedRouteSnapshot, Router } from '@angular/router'
import { MatSnackBar } from '@angular/material/snack-bar'
import { AllocationService } from '../../services/allocation.service'
import { ConfigurationsService, EventService } from '@sunbird-cb/utils'
import { UpdateWorkallocationComponent } from './update-workallocation.component'
import { of } from 'rxjs'


describe('UpdateWorkallocationComponent', () => {
    let component: UpdateWorkallocationComponent

    const exportAsService: Partial<ExportAsService> = {}
    const snackBar: Partial<MatSnackBar> = {}
    const router: Partial<Router> = {}
    const fb: Partial<FormBuilder> = {
        array: jest.fn(),
        group: jest.fn()
    }
    const allocateSrvc: Partial<AllocationService> = {
        getUsers: jest.fn(() => of())
    }
    const activeRoute: Partial<ActivatedRoute> = {
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
            params: {
                userId: 'sampleID'
            },
            queryParams: {},
            fragment: null,
            outlet: 'primary',
            component: null,
        } as unknown as ActivatedRouteSnapshot
    }
    const configSvc: Partial<ConfigurationsService> = {
        unMappedUser: {
            channel: 'channel'
        }
    }
    const events: Partial<EventService> = {}

    beforeAll(() => {
        component = new UpdateWorkallocationComponent(
            exportAsService as ExportAsService,
            snackBar as MatSnackBar,
            router as Router,
            fb as FormBuilder,
            allocateSrvc as AllocationService,
            activeRoute as ActivatedRoute,
            configSvc as ConfigurationsService,
            events as EventService
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