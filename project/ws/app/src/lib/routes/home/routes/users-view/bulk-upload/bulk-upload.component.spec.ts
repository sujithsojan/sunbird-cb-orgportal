
import { MatDialog } from '@angular/material/dialog'
import { MatSnackBar } from '@angular/material/snack-bar'
import { ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router'
import { FileService } from '../../../../users/services/upload.service'
import { UsersService } from '../../../../users/services/users.service'
import { BulkUploadComponent } from './bulk-upload.component'
import { of } from 'rxjs'

describe('BulkUploadComponent', () => {
    let component: BulkUploadComponent

    const fileService: Partial<FileService> = {}
    const matSnackBar: Partial<MatSnackBar> = {}
    const router: Partial<ActivatedRoute> = {
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
    }
    const dialog: Partial<MatDialog> = {}
    const usersService: Partial<UsersService> = {}

    beforeAll(() => {
        component = new BulkUploadComponent(
            fileService as FileService,
            matSnackBar as MatSnackBar,
            router as ActivatedRoute,
            dialog as MatDialog,
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