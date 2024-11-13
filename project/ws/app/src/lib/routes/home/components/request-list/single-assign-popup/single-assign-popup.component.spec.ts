
import { FormBuilder } from '@angular/forms'
import { MatDialogRef } from '@angular/material/dialog'
import { ProfileV2Service } from '../../../services/home.servive'
import { ConfigResolveService } from '../../../resolvers/config-resolve.service'
import { SingleAssignPopupComponent } from './single-assign-popup.component'

describe('SingleAssignPopupComponent', () => {
    let component: SingleAssignPopupComponent

    const fb: Partial<FormBuilder> = {
        group: jest.fn()
    }
    const homeService: Partial<ProfileV2Service> = {}
    const data: any = {}
    const configService: Partial<ConfigResolveService> = {}
    const dialogRef: Partial<MatDialogRef<SingleAssignPopupComponent>> = {}

    beforeAll(() => {
        component = new SingleAssignPopupComponent(
            fb as FormBuilder,
            homeService as ProfileV2Service,
            data as undefined,
            configService as ConfigResolveService,
            dialogRef as MatDialogRef<SingleAssignPopupComponent>
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