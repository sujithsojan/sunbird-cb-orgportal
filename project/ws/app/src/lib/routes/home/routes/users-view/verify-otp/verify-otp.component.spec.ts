
import { MatDialogRef } from '@angular/material/dialog'
import { MatSnackBar } from '@angular/material/snack-bar'
import { OtpService } from '../../../../users/services/otp.service'
import { UsersService } from '../../../../users/services/users.service'
import { VerifyOtpComponent } from './verify-otp.component'

describe('VerifyOtpComponent', () => {
    let component: VerifyOtpComponent

    const dialogRef: Partial<MatDialogRef<VerifyOtpComponent>> = {}
    const data: any = {}
    const matSnackbar: Partial<MatSnackBar> = {}
    const otpService: Partial<OtpService> = {}
    const usersService: Partial<UsersService> = {}

    beforeAll(() => {
        component = new VerifyOtpComponent(
            dialogRef as MatDialogRef<VerifyOtpComponent>,
            data as undefined,
            matSnackbar as MatSnackBar,
            otpService as OtpService,
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