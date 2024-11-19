
import { MatSnackBar } from '@angular/material/snack-bar'
import { SignupService } from './signup.service'
import { SignupComponent } from './signup.component'

describe('SignupComponent', () => {
    let component: SignupComponent

    const snackBar: Partial<MatSnackBar> = {}
    const signupService: Partial<SignupService> = {}

    beforeAll(() => {
        component = new SignupComponent(
            snackBar as MatSnackBar,
            signupService as SignupService
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