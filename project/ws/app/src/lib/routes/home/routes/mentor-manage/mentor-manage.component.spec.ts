
import { MatDialog } from '@angular/material/dialog'
import { ActivatedRoute, ActivatedRouteSnapshot, Router } from '@angular/router'
import { EventService } from '@sunbird-cb/utils'
import { DomSanitizer } from '@angular/platform-browser'
import { UsersService } from '../../../users/services/users.service'
import { LoaderService } from '../../../../../../../../../src/app/services/loader.service'
import { MentorManageComponent } from './mentor-manage.component'

describe('MentorManageComponent', () => {
    let component: MentorManageComponent

    const dialog: Partial<MatDialog> = {}
    const route: Partial<ActivatedRoute> = {
        parent: {
            snapshot: {
                data: {
                    configService: {
                        userProfile: {
                            userId: 'sampleId',
                            userProfileV2: {
                                email: 'test@example.com',
                                mobile: '1234567890',
                            },
                            orgReadData: {
                                frameworkid: 'sampleFrameworkId',
                            },
                        },
                        unMappedUser: {
                            profileDetails: {
                                profileStatus: 'Active'
                            }
                        }
                    },
                },
                url: [],
                params: {},
                queryParams: {},
                fragment: null,
                outlet: 'primary',
                component: null,
            } as unknown as ActivatedRouteSnapshot,
        }
    } as unknown as ActivatedRoute
    const router: Partial<Router> = {}
    const events: Partial<EventService> = {}
    const loaderService: Partial<LoaderService> = {}
    const sanitizer: Partial<DomSanitizer> = {}
    const usersService: Partial<UsersService> = {}

    beforeAll(() => {
        component = new MentorManageComponent(
            dialog as MatDialog,
            route as ActivatedRoute,
            router as Router,
            events as EventService,
            loaderService as LoaderService,
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