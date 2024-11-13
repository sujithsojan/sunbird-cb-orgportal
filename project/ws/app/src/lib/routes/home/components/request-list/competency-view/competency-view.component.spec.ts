import { MatDialogRef } from '@angular/material/dialog'
import { DomSanitizer } from '@angular/platform-browser'
import { CompetencyViewComponent } from './competency-view.component'

describe('CompetencyViewComponent', () => {
    let component: CompetencyViewComponent

    const dialogRef: Partial<MatDialogRef<CompetencyViewComponent>> = {}
    const sanitized: Partial<DomSanitizer> = {}
    const dData: any = {}

    beforeAll(() => {
        component = new CompetencyViewComponent(
            dialogRef as MatDialogRef<CompetencyViewComponent>,
            sanitized as DomSanitizer,
            dData as undefined
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