
import { MatDialogRef } from '@angular/material/dialog'
import { EventThumbnailComponent } from './event-thumbnail.component'

describe('EventThumbnailComponent', () => {
    let component: EventThumbnailComponent

    const dialogRef: Partial<MatDialogRef<EventThumbnailComponent>> = {}
    const data = {}

    beforeAll(() => {
        component = new EventThumbnailComponent(
            dialogRef as MatDialogRef<EventThumbnailComponent>,
            data as any
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
