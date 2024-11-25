
import { HttpClient } from '@angular/common/http'
import { MdoInfoService } from './mdoinfo.service'


describe('MdoInfoService', () => {
    let component: MdoInfoService

    const http: Partial<HttpClient> = {}

    beforeAll(() => {
        component = new MdoInfoService(
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