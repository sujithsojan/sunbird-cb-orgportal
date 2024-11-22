
import { HttpClient } from '@angular/common/http'
import { OtpService } from './otp.service'

describe('OtpService', () => {
    let component: OtpService

    const http: Partial<HttpClient> = {}

    beforeAll(() => {
        component = new OtpService(
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