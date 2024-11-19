
import { MatSnackBar } from '@angular/material/snack-bar'
import { SignupAutoService } from './signup-auto.service'
import { ActivatedRoute } from '@angular/router'
import { SignupAutoComponent } from './signup-auto.component'

describe('SignupAutoComponent', () => {
    let component: SignupAutoComponent

    const snackBar: Partial<MatSnackBar> = {}
    const signupAutoService: Partial<SignupAutoService> = {}
    const route: Partial<ActivatedRoute> = {}

    beforeAll(() => {
        component = new SignupAutoComponent(
            snackBar as MatSnackBar,
            signupAutoService as SignupAutoService,
            route as ActivatedRoute
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