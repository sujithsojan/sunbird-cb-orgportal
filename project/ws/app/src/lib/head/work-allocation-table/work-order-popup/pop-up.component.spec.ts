
import { WorkallocationService } from './../../../routes/home/services/workallocation.service'
import { MatDialogRef } from '@angular/material/dialog'
import { Router } from '@angular/router'
import { WorkAllocationPopUpComponent } from './pop-up.component'
import { Renderer2 } from '@angular/core'

describe('WorkAllocationPopUpComponent', () => {
    let component: WorkAllocationPopUpComponent

    const router: Partial<Router> = {}
    const ren: Partial<Renderer2> = {}
    const dialogRef: Partial<MatDialogRef<WorkAllocationPopUpComponent>> = {}
    const workallocationSrvc: Partial<WorkallocationService> = {}
    const dialogData = {}

    beforeAll(() => {
        component = new WorkAllocationPopUpComponent(
            router as Router,
            ren as Renderer2,
            dialogRef as MatDialogRef<WorkAllocationPopUpComponent>,
            workallocationSrvc as WorkallocationService,
            dialogData
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