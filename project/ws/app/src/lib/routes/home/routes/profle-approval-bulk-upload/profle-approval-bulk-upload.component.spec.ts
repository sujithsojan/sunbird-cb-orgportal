(window as any)['env'] = {
    name: 'test-environment',
    sitePath: '/test-site-path',
    karmYogiPath: '/test-karm-yogi-path',
    cbpPath: '/test-cbp-path'
}

import { DatePipe } from '@angular/common'
import { FormBuilder } from '@angular/forms'
import { MatSnackBar } from '@angular/material/snack-bar'
import { ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router'
import { FileService } from '../../../users/services/upload.service'
import { UsersService } from '../../../users/services/users.service'
import { ProfleApprovalBulkUploadComponent } from './profle-approval-bulk-upload.component'
import { of } from 'rxjs'


describe('ProfleApprovalBulkUploadComponent', () => {
    let component: ProfleApprovalBulkUploadComponent

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
    const datepipe: Partial<DatePipe> = {}
    const usersSvc: Partial<UsersService> = {}

    beforeAll(() => {
        component = new ProfleApprovalBulkUploadComponent(
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