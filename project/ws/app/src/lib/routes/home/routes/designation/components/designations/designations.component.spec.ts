(window as any)['env'] = {
    name: 'test-environment',
    sitePath: '/test-site-path',
    karmYogiPath: '/test-karm-yogi-path',
    cbpPath: '/test-cbp-path'
}
import { DesignationsService } from '../../services/designations.service'
import { MatDialog } from '@angular/material/dialog'
import { MatSnackBar } from '@angular/material/snack-bar'
import { ActivatedRoute } from '@angular/router'
import { DesignationsComponent } from './designations.component'

describe('DesignationsComponent', () => {
    let component: DesignationsComponent

    const designationsService: Partial<DesignationsService> = {}
    const dialog: Partial<MatDialog> = {}
    const activateRoute: Partial<ActivatedRoute> = {}
    const snackBar: Partial<MatSnackBar> = {}

    beforeAll(() => {
        component = new DesignationsComponent(
            designationsService as DesignationsService,
            dialog as MatDialog,
            activateRoute as ActivatedRoute,
            snackBar as MatSnackBar
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