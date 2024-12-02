
import { HttpClient } from '@angular/common/http'
import { TncPublicResolverService } from './tnc-public-resolver.service'

describe('TncPublicResolverService', () => {
    let component: TncPublicResolverService

    const http: Partial<HttpClient> = {}

    beforeAll(() => {
        component = new TncPublicResolverService(
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
