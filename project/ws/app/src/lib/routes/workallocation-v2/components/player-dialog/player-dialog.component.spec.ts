
import { MatDialogRef } from '@angular/material/dialog'
import { PlayerDialogComponent } from './player-dialog.component'

describe('PlayerDialogComponent', () => {
    let component: PlayerDialogComponent

    const dialogRef: Partial<MatDialogRef<PlayerDialogComponent>> = {}
    const data: any = {}

    beforeAll(() => {
        component = new PlayerDialogComponent(
            dialogRef as MatDialogRef<PlayerDialogComponent>,
            data as undefined
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