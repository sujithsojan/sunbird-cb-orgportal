import { MatDialogRef } from '@angular/material/dialog'
import { DomSanitizer } from '@angular/platform-browser'
import { ReportsVideoComponent } from './reports-video.component'

describe('ReportsVideoComponent', () => {
    let component: ReportsVideoComponent

    const dialogRef: Partial<MatDialogRef<ReportsVideoComponent>> = {}
    const dialogData: any = {}
    const domSanitizer: Partial<DomSanitizer> = {}

    beforeAll(() => {
        component = new ReportsVideoComponent(
            dialogRef as MatDialogRef<ReportsVideoComponent>,
            dialogData as undefined,
            domSanitizer as DomSanitizer
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