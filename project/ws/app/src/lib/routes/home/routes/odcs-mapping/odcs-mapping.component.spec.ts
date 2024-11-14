(window as any)['env'] = {
    name: 'test-environment',
    sitePath: '/test-site-path',
    karmYogiPath: '/test-karm-yogi-path',
    cbpPath: '/test-cbp-path'
}

import { ActivatedRoute, Router } from '@angular/router'
import { DesignationsService } from '../designation/services/designations.service'
import { MatDialog } from '@angular/material/dialog'
import { MatSnackBar } from '@angular/material/snack-bar'
import { OdcsMappingComponent } from './odcs-mapping.component'

describe('OdcsMappingComponent', () => {
    let component: OdcsMappingComponent

    const activateRoute: Partial<ActivatedRoute> = {}
    const designationsService: Partial<DesignationsService> = {}
    const snackBar: Partial<MatSnackBar> = {}
    const dialog: Partial<MatDialog> = {}
    const router: Partial<Router> = {}

    beforeAll(() => {
        component = new OdcsMappingComponent(
            activateRoute as ActivatedRoute,
            designationsService as DesignationsService,
            snackBar as MatSnackBar,
            dialog as MatDialog,
            router as Router
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