
import { FormBuilder } from '@angular/forms'
import { ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router'
import { WatStoreService } from '../../services/wat.store.service'
import { CompDetailsComponent } from './comp-details.component'

describe('CompDetailsComponent', () => {
    let component: CompDetailsComponent

    const watStore: Partial<WatStoreService> = {}
    const formBuilder: Partial<FormBuilder> = {
        array: jest.fn(),
        group: jest.fn()
    }
    const activated: Partial<ActivatedRoute> = {
        snapshot: {
            data: {
                configService: {
                    userProfile: {
                        rootOrgId: 'sampleRootOrgId',
                        userProfileV2: {
                            email: 'test@example.com',
                            mobile: '1234567890',
                        },
                        orgReadData: {
                            frameworkid: 'sampleFrameworkId',
                        },
                    },
                },
                pageData: {
                    data: {
                        levels: 'levels'
                    }
                }
            },
            url: [],
            params: {},
            queryParams: {},
            fragment: null,
            outlet: 'primary',
            component: null,
        } as unknown as ActivatedRouteSnapshot,
    }

    beforeAll(() => {
        component = new CompDetailsComponent(
            watStore as WatStoreService,
            formBuilder as FormBuilder,
            activated as ActivatedRoute
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