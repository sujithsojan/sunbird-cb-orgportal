import { FormBuilder, FormGroup } from '@angular/forms'
import { MatSnackBar } from '@angular/material/snack-bar'
import { UsersService } from '../../../../users/services/users.service'
import { RolesService } from '../../../../users/services/roles.service'
import { ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router'
import { SingleUserCreationComponent } from './single-user-creation.component'
import { of } from 'rxjs'
import * as _ from 'lodash'

describe('SingleUserCreationComponent', () => {
    let component: SingleUserCreationComponent

    const formBuilder: Partial<FormBuilder> = {
        group: jest.fn().mockReturnValue(new FormGroup({}))
    }
    const usersService: Partial<UsersService> = {}
    const matSnackBar: Partial<MatSnackBar> = {}
    const rolesService: Partial<RolesService> = {}
    const activatedRouter: Partial<ActivatedRoute> = {
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
        outlet: 'primary',
        component: null,
    }

    beforeAll(() => {
        component = new SingleUserCreationComponent(
            formBuilder as FormBuilder,
            usersService as UsersService,
            matSnackBar as MatSnackBar,
            rolesService as RolesService,
            activatedRouter as ActivatedRoute
        )

        // Initialize the form with a control for 'designation'

    })

    beforeEach(() => {
        jest.clearAllMocks()
        jest.resetAllMocks()
    })

    it('should create an instance of the component', () => {
        expect(component).toBeTruthy()
    })
})
