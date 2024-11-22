import { AppRetryInterceptorService } from './app-retry-interceptor.service'

describe('AppRetryInterceptorService', () => {
    let component: AppRetryInterceptorService

    beforeAll(() => {
        component = new AppRetryInterceptorService(

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
