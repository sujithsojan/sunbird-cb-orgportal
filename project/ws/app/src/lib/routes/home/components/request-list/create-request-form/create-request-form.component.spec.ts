(window as any)['env'] = {
    name: 'test-environment',
    sitePath: '/test-site-path',
    karmYogiPath: '/test-karm-yogi-path',
    cbpPath: '/test-cbp-path',
}
import { FormBuilder } from '@angular/forms'
import { ProfileV2Service } from '../../../services/home.servive'
import { ActivatedRoute, Router } from '@angular/router'
import { MatDialog } from '@angular/material/dialog'
import { MatSnackBar } from '@angular/material/snack-bar'
import { InitService } from '../../../../../../../../../../src/app/services/init.service'
import { CreateRequestFormComponent } from './create-request-form.component'

describe('CreateRequestFormComponent', () => {
    let component: CreateRequestFormComponent

    const formBuilder: Partial<FormBuilder> = {}
    const homeService: Partial<ProfileV2Service> = {}
    const activatedRouter: Partial<ActivatedRoute> = {}
    const snackBar: Partial<MatSnackBar> = {}
    const router: Partial<Router> = {}
    const dialog: Partial<MatDialog> = {}
    const initService: Partial<InitService> = {}

    beforeAll(() => {
        component = new CreateRequestFormComponent(
            formBuilder as FormBuilder,
            homeService as ProfileV2Service,
            activatedRouter as ActivatedRoute,
            snackBar as MatSnackBar,
            router as Router,
            dialog as MatDialog,
            initService as InitService
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
