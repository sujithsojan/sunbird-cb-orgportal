(window as any)['env'] = {
    name: 'test-environment',
    sitePath: '/test-site-path',
    karmYogiPath: '/test-karm-yogi-path',
    cbpPath: '/test-cbp-path'
}
import { ActivatedRoute } from '@angular/router'
import { TrainingPlanService } from './../../services/traininig-plan.service'
import { TrainingPlanDataSharingService } from './../../services/training-plan-data-share.service'
import { LoaderService } from '../../../../../../../../../src/app/services/loader.service'
import { InitService } from '../../../../../../../../../src/app/services/init.service'
import { SearchComponent } from './search.component'


describe('SearchComponent', () => {
    let component: SearchComponent

    const trainingPlanService: Partial<TrainingPlanService> = {}
    const route: Partial<ActivatedRoute> = {}
    const tpdsSvc: Partial<TrainingPlanDataSharingService> = {}
    const loadingService: Partial<LoaderService> = {}
    const initService: Partial<InitService> = {}

    beforeAll(() => {
        component = new SearchComponent(
            trainingPlanService as TrainingPlanService,
            route as ActivatedRoute,
            tpdsSvc as TrainingPlanDataSharingService,
            loadingService as LoaderService,
            initService as InitService
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