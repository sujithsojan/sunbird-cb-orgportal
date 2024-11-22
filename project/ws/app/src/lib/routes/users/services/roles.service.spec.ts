
import { HttpClient } from '@angular/common/http'
import { RolesService } from './roles.service'

describe('RolesService', () => {
    let component: RolesService

    const http: Partial<HttpClient> = {}

    beforeAll(() => {
        component = new RolesService(
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