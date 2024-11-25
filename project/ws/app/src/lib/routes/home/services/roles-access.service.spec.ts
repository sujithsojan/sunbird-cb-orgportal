
import { HttpClient } from '@angular/common/http'
import { RolesAccessService } from './roles-access.service'

describe('RolesAccessService', () => {
    let component: RolesAccessService

    const http: Partial<HttpClient> = {}

    beforeAll(() => {
        component = new RolesAccessService(
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