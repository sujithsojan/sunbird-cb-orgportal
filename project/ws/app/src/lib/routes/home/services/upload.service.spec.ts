
import { HttpClient } from '@angular/common/http'
import { UploadService } from './upload.service'

describe('UploadService', () => {
    let component: UploadService

    const http: Partial<HttpClient> = {}

    beforeAll(() => {
        component = new UploadService(
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