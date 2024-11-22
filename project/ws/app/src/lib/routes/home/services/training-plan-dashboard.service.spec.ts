
import { HttpClient } from '@angular/common/http'
import { TrainingPlanDashboardService } from './training-plan-dashboard.service'


describe('TrainingPlanDashboardService', () => {
    let component: TrainingPlanDashboardService

    const http: Partial<HttpClient> = {}

    beforeAll(() => {
        component = new TrainingPlanDashboardService(
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