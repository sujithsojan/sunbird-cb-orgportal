
import { MatDialog } from '@angular/material/dialog'
import { ActivatedRoute, ActivatedRouteSnapshot, Router } from '@angular/router'
import { EventService } from '@sunbird-cb/utils'
import { DomSanitizer } from '@angular/platform-browser'
import { UsersService } from '../../../../users/services/users.service'
import { LoaderService } from '../../../../../../../../../../src/app/services/loader.service'
import { ProfileV2UtillService } from '../../../services/home-utill.service'
import { AllUsersComponent } from './all-users.component'

describe('AllUsersComponent', () => {
    let component: AllUsersComponent

    const dialog: Partial<MatDialog> = {}
    const route: Partial<ActivatedRoute> = {
        parent: {

            snapshot: {
                data: {
                    configService: {
                        userProfile: {
                            userId: 'sampleId',
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
    const router: Partial<Router> = {}
    const events: Partial<EventService> = {}
    const loaderService: Partial<LoaderService> = {}
    const profileUtilSvc: Partial<ProfileV2UtillService> = {}
    const sanitizer: Partial<DomSanitizer> = {}
    const usersService: Partial<UsersService> = {}

    beforeAll(() => {
        component = new AllUsersComponent(
            dialog as MatDialog,
            route as ActivatedRoute,
            router as Router,
            events as EventService,
            loaderService as LoaderService,
            profileUtilSvc as ProfileV2UtillService,
            sanitizer as DomSanitizer,
            usersService as UsersService
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