
import { ConfigurationsService, ValueService } from '@sunbird-cb/utils'
import { ActivatedRoute, ActivatedRouteSnapshot, Router } from '@angular/router'
import { StepService } from '../../services/step.service'
import { OrgProfileService } from '../../services/org-profile.service'
import { MatSnackBar } from '@angular/material/snack-bar'
import { StateProfileHomeComponent } from './state-profile-home.component'
import { BehaviorSubject, of } from 'rxjs'

describe('StateProfileHomeComponent', () => {
    let component: StateProfileHomeComponent

    const valueSvc: Partial<ValueService> = {
        isLtMedium$: of()
    }
    const route: Partial<ActivatedRoute> = {
        data: of({
            pageData: {
                data: {
                    bulkUploadConfig: {
                        pageSize: 10,
                        pageSizeOptions: [10, 20, 30],
                    },
                },
            },
        }),
        parent: {
            snapshot: {
                data: {
                    pageData: {
                        data: {
                            tabs: []
                        }
                    },
                },
                url: [],
                params: {},
                queryParams: {},
                fragment: null,
                outlet: 'primary',
                component: null,
            } as unknown as ActivatedRouteSnapshot,
        },
        url: [],
        params: {},
        queryParams: {},
        fragment: null,
        outlet: 'primary',
        component: null,
    } as unknown as ActivatedRoute
    const router: Partial<Router> = {
        events: of()
    }

    const stepService: Partial<StepService> = {
        allSteps: new BehaviorSubject<number>(0),
    }

    const configSvc: Partial<ConfigurationsService> = {}
    const snackBar: Partial<MatSnackBar> = {}
    const orgSvc: Partial<OrgProfileService> = {}

    beforeAll(() => {
        component = new StateProfileHomeComponent(
            valueSvc as ValueService,
            route as ActivatedRoute,
            router as Router,
            stepService as StepService,
            configSvc as ConfigurationsService,
            snackBar as MatSnackBar,
            orgSvc as OrgProfileService
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