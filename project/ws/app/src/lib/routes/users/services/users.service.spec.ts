
import { HttpClient } from '@angular/common/http'
import { UsersService } from './users.service'

describe('UsersService', () => {
    let component: UsersService

    const http: Partial<HttpClient> = {}

    beforeAll(() => {
        component = new UsersService(
            http as HttpClient
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