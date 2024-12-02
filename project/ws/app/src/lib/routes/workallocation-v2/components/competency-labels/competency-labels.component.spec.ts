
import { ChangeDetectorRef } from '@angular/core'
import { FormBuilder } from '@angular/forms'
import { AllocationService } from '../../../workallocation/services/allocation.service'
import { WatStoreService } from '../../services/wat.store.service'
import { MatDialog } from '@angular/material/dialog'
import { MatSnackBar } from '@angular/material/snack-bar'
import { ActivatedRoute } from '@angular/router'
import { CompetencyLabelsComponent } from './competency-labels.component'

describe('CompetencyLabelsComponent', () => {
    let component: CompetencyLabelsComponent

    const changeDetector: Partial<ChangeDetectorRef> = {}
    const formBuilder: Partial<FormBuilder> = {}
    const allocateSrvc: Partial<AllocationService> = {}
    const watStore: Partial<WatStoreService> = {}
    const snackBar: Partial<MatSnackBar> = {}
    const dialog: Partial<MatDialog> = {}
    const activated: Partial<ActivatedRoute> = {}

    beforeAll(() => {
        component = new CompetencyLabelsComponent(
            changeDetector as ChangeDetectorRef,
            formBuilder as FormBuilder,
            allocateSrvc as AllocationService,
            watStore as WatStoreService,
            snackBar as MatSnackBar,
            dialog as MatDialog,
            activated as ActivatedRoute
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