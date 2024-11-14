import { DesignationsService } from '../../services/designations.service'
import { MatDialog } from '@angular/material/dialog'
import { MatSnackBar } from '@angular/material/snack-bar'
import { LoaderService } from '../../../../../../../../../../../src/app/services/loader.service'
import { ActivatedRoute, Router } from '@angular/router'
import { DatePipe } from '@angular/common'
import { ImportDesignationComponent } from './import-designation.component'

describe('ImportDesignationComponent', () => {
    let component: ImportDesignationComponent

    const designationsService: Partial<DesignationsService> = {}
    const dialog: Partial<MatDialog> = {}
    const loaderService: Partial<LoaderService> = {}
    const route: Partial<Router> = {
        navigateByUrl: jest.fn()
    }
    const snackBar: Partial<MatSnackBar> = {}
    const datePipe: Partial<DatePipe> = {}
    const activateRoute: Partial<ActivatedRoute> = {}

    beforeAll(() => {
        component = new ImportDesignationComponent(
            designationsService as DesignationsService,
            dialog as MatDialog,
            loaderService as LoaderService,
            route as Router,
            snackBar as MatSnackBar,
            datePipe as DatePipe,
            activateRoute as ActivatedRoute
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