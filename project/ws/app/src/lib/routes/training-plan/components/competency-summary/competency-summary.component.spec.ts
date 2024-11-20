(window as any)['env'] = {
    name: 'test-environment',
    sitePath: '/test-site-path',
    karmYogiPath: '/test-karm-yogi-path',
    cbpPath: '/test-cbp-path',
}
import { CompetencySummaryComponent } from './competency-summary.component'
import { InitService } from '../../../../../../../../../src/app/services/init.service'
import { ConfigurationsService } from '@sunbird-cb/utils/lib/services/configurations.service'

describe('CompetencySummaryComponent', () => {
    let component: CompetencySummaryComponent

    const mockConfigService: Partial<ConfigurationsService> = {
        competency: {
            v1: {
                vKey: 'key',
                vCompetencyArea: 'area',
                vCompetencyTheme: 'theme',
            },
        },
    }

    const mockInitService: Partial<InitService> = {
        configSvc: mockConfigService as ConfigurationsService,
    }

    beforeEach(() => {
        component = new CompetencySummaryComponent(mockInitService as InitService)
        jest.clearAllMocks()
        jest.resetAllMocks()
    })

    it('should create an instance of CompetencySummaryComponent', () => {
        expect(component).toBeTruthy()
    })

})
