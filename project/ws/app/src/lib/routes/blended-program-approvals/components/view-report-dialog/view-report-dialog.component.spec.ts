
import { MatDialogRef } from '@angular/material/dialog'
import { BlendedApporvalService } from '../../services/blended-approval.service'
import { ViewReportDialogComponent } from './view-report-dialog.component'

describe('ViewReportDialogComponent', () => {
    let component: ViewReportDialogComponent

    const dialogRef: Partial<MatDialogRef<ViewReportDialogComponent>> = {}
    const data = {}
    const bpService: Partial<BlendedApporvalService> = {}

    beforeAll(() => {
        component = new ViewReportDialogComponent(
            dialogRef as MatDialogRef<ViewReportDialogComponent>,
            data as any,
            bpService as BlendedApporvalService
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
