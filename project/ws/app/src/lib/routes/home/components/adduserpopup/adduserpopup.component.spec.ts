import { MatDialogRef } from '@angular/material/dialog'
import { Router } from '@angular/router'
import { AdduserpopupComponent } from './adduserpopup.component'

describe('AdduserpopupComponent', () => {
    let component: AdduserpopupComponent

    const dialogRef: Partial<MatDialogRef<AdduserpopupComponent>> = {}
    const data: any = {}
    const router: Partial<Router> = {}

    beforeAll(() => {
        component = new AdduserpopupComponent(
            dialogRef as MatDialogRef<AdduserpopupComponent>,
            data as undefined,
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
