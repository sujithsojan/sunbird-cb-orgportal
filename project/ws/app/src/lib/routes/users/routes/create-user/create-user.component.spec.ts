
import { ActivatedRoute, ActivatedRouteSnapshot, Router } from '@angular/router'
import { UsersService } from '../../services/users.service'
import { MatSnackBar } from '@angular/material/snack-bar'
import { ValueService } from '@sunbird-cb/utils'
import { CreateUserComponent } from './create-user.component'
import { of } from 'rxjs'

describe('CreateUserComponent', () => {
    let component: CreateUserComponent

    const router: Partial<Router> = {
        events: of()
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
            params: {},
            queryParams: {},
            fragment: null,
            outlet: 'primary',
            component: null,
        } as unknown as ActivatedRouteSnapshot,
        queryParamMap: of()
    }
    const snackBar: Partial<MatSnackBar> = {}
    const usersSvc: Partial<UsersService> = {}
    const valueSvc: Partial<ValueService> = {}

    beforeAll(() => {
        component = new CreateUserComponent(
            router as Router,
            activeRoute as ActivatedRoute,
            snackBar as MatSnackBar,
            usersSvc as UsersService,
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