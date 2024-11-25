
import { HttpClient } from '@angular/common/http'
import { ProfileV2UtillService } from './home-utill.service'

describe('ProfileV2UtillService', () => {
    let component: ProfileV2UtillService

    const http: Partial<HttpClient> = {}

    beforeAll(() => {
        component = new ProfileV2UtillService(
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