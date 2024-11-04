
import { MatDialog } from '@angular/material/dialog'
import { Router } from '@angular/router'
import { UsersCardComponent } from './users-card.component'

describe('UsersCardComponent', () => {
    let component: UsersCardComponent

    const dialogue: Partial<MatDialog> = {}
    const router: Partial<Router> = {}

    beforeAll(() => {
        component = new UsersCardComponent(
            dialogue as MatDialog,
            router as Router
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