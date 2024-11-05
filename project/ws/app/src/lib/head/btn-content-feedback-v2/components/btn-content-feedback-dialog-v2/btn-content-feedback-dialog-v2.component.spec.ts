import { MatDialogRef } from '@angular/material/dialog'
import { MatSnackBar } from '@angular/material/snack-bar'
import { FeedbackService } from '../../services/feedback.service'
import { BtnContentFeedbackDialogV2Component } from './btn-content-feedback-dialog-v2.component'
import { NsContent } from '../../../_services/widget-content.model'

describe('BtnContentFeedbackDialogV2Component', () => {
    let component: BtnContentFeedbackDialogV2Component

    const content: Partial<NsContent.IContent> = {
    }

    const dialogRef: Partial<MatDialogRef<BtnContentFeedbackDialogV2Component>> = {}
    const feedbackApi: Partial<FeedbackService> = {}
    const snackbar: Partial<MatSnackBar> = {}

    beforeAll(() => {
        component = new BtnContentFeedbackDialogV2Component(
            content as NsContent.IContent,
            dialogRef as MatDialogRef<BtnContentFeedbackDialogV2Component>,
            feedbackApi as FeedbackService,
            snackbar as MatSnackBar
        )
    })

    beforeEach(() => {
        jest.clearAllMocks()
        jest.resetAllMocks()
    })

    it('should create an instance of the component', () => {
        expect(component).toBeTruthy()
    })
})
