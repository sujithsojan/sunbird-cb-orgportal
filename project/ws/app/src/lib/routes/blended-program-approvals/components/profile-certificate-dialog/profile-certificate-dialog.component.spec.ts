
import { MatDialogRef } from '@angular/material/dialog'
import { ProfileCertificateDialogComponent } from './profile-certificate-dialog.component'

describe('ProfileCertificateDialogComponent', () => {
    let component: ProfileCertificateDialogComponent

    const dialogRef: Partial<MatDialogRef<ProfileCertificateDialogComponent>> = {}
    const data = {}

    beforeAll(() => {
        component = new ProfileCertificateDialogComponent(
            dialogRef as MatDialogRef<ProfileCertificateDialogComponent>,
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
