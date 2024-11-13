import { FormBuilder } from '@angular/forms'
import { ProfileV2Service } from '../../../services/home.servive'
import { MatDialogRef } from '@angular/material/dialog'
import { ConfigResolveService } from '../../../resolvers/config-resolve.service'
import { AssignListPopupComponent } from './assign-list-popup.component'

describe('AssignListPopupComponent', () => {
    let component: AssignListPopupComponent

    const fb: Partial<FormBuilder> = {
        group: jest.fn(),
    }
    const homeService: Partial<ProfileV2Service> = {}
    const data: any = {}
    const configService: Partial<ConfigResolveService> = {}
    const dialogRef: Partial<MatDialogRef<AssignListPopupComponent>> = {}

    beforeAll(() => {
        component = new AssignListPopupComponent(
            fb as FormBuilder,
            homeService as ProfileV2Service,
            data as undefined,
            configService as ConfigResolveService,
            dialogRef as MatDialogRef<AssignListPopupComponent>
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
