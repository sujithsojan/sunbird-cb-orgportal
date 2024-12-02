(window as any)['env'] = {
    name: 'test-environment',
    sitePath: '/test-site-path',
    karmYogiPath: '/test-karm-yogi-path',
    cbpPath: '/test-cbp-path',
}
import { FormBuilder } from '@angular/forms'
import { FileService } from '../../services/upload.service'
import { MatSnackBar } from '@angular/material/snack-bar'
import { ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router'
import { DatePipe } from '@angular/common'
import { UsersService } from '../../services/users.service'
import { UsersUploadComponent } from './users-upload.component'
import { of } from 'rxjs'

describe('UsersUploadComponent', () => {
    let component: UsersUploadComponent

    const fb: Partial<FormBuilder> = {
        group: jest.fn()
    }
    const fileService: Partial<FileService> = {}
    const snackBar: Partial<MatSnackBar> = {}
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
            Parent: {
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
    const datepipe: Partial<DatePipe> = {}
    const usersSvc: Partial<UsersService> = {}

    beforeAll(() => {
        component = new UsersUploadComponent(
            fb as FormBuilder,
            fileService as FileService,
            snackBar as MatSnackBar,
            route as ActivatedRoute,
            datepipe as DatePipe,
            usersSvc as UsersService
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