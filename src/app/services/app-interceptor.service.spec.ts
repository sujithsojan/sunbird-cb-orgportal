
import { ConfigurationsService, AuthKeycloakService } from '@sunbird-cb/utils'
import { MatSnackBar } from '@angular/material/snack-bar'
import { AppInterceptorService } from './app-interceptor.service'

describe('AppInterceptorService', () => {
    let component: AppInterceptorService

    const configSvc: Partial<ConfigurationsService> = {}
    const snackBar: Partial<MatSnackBar> = {}
    const authSvc: Partial<AuthKeycloakService> = {}
    const locale: any = {}

    beforeAll(() => {
        component = new AppInterceptorService(
            configSvc as ConfigurationsService,
            snackBar as MatSnackBar,
            authSvc as AuthKeycloakService,
            locale as any
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
