import { LoaderService } from '../../../../../../../../../src/app/services/loader.service'
import { UsersService } from '../../../users/services/users.service'
import { MatDialog } from '@angular/material/dialog'
import { SearchComponent } from './search.component'

describe('SearchComponent', () => {
    let component: SearchComponent

    const dialog: Partial<MatDialog> = {}
    const usersSvc: Partial<UsersService> = {}
    const loadingService: Partial<LoaderService> = {}

    beforeAll(() => {
        component = new SearchComponent(
            dialog as MatDialog,
            usersSvc as UsersService,
            loadingService as LoaderService
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