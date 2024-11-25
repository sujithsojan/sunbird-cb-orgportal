
import { ActivatedRoute, Router } from '@angular/router'
import { UsersService } from '../../services/users.service'
import { MatSnackBar } from '@angular/material/snack-bar'
import { EventService } from '@sunbird-cb/utils'
import { ViewUserComponent } from './view-user.component'
import { of } from 'rxjs'


describe('ViewUserComponent', () => {
    let component: ViewUserComponent

    const activeRoute: Partial<ActivatedRoute> = {}
    const router: Partial<Router> = {
        events: of()
    }
    const events: Partial<EventService> = {}
    const usersSvc: Partial<UsersService> = {}
    const snackBar: Partial<MatSnackBar> = {}

    beforeAll(() => {
        component = new ViewUserComponent(
            activeRoute as ActivatedRoute,
            router as Router,
            events as EventService,
            usersSvc as UsersService,
            snackBar as MatSnackBar
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