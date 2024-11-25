

import { HttpClient } from '@angular/common/http'
import { BlendedService } from './blended.service'

describe('BlendedService', () => {
    let component: BlendedService

    const http: Partial<HttpClient> = {}

    beforeAll(() => {
        component = new BlendedService(
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