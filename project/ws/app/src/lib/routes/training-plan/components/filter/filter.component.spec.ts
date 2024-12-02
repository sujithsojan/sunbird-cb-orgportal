(window as any)['env'] = {
    name: 'test-environment',
    sitePath: '/test-site-path',
    karmYogiPath: '/test-karm-yogi-path',
    cbpPath: '/test-cbp-path'
}
import { ChangeDetectorRef } from '@angular/core'
import { TrainingPlanService } from './../../services/traininig-plan.service'
import { TrainingPlanDataSharingService } from '../../services/training-plan-data-share.service'
import { InitService } from '../../../../../../../../../src/app/services/init.service'
import { FilterComponent } from './filter.component'

describe('FilterComponent', () => {
    let component: FilterComponent

    const cdref: Partial<ChangeDetectorRef> = {}
    const trainingPlanService: Partial<TrainingPlanService> = {}
    const tpdsSvc: Partial<TrainingPlanDataSharingService> = {}
    const initService: Partial<InitService> = {}

    beforeAll(() => {
        component = new FilterComponent(
            cdref as ChangeDetectorRef,
            trainingPlanService as TrainingPlanService,
            tpdsSvc as TrainingPlanDataSharingService,
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