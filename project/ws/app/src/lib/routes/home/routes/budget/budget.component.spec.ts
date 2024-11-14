import { MatDialog } from '@angular/material/dialog'
import { MatSnackBar } from '@angular/material/snack-bar'
import { MdoInfoService } from '../../services/mdoinfo.service'
import { ConfigurationsService } from '@sunbird-cb/utils'
import { ActivatedRoute } from '@angular/router'
import { BudgetComponent } from './budget.component'

describe('BudgetComponent', () => {
    let component: BudgetComponent

    const snackBar: Partial<MatSnackBar> = {}
    const dialog: Partial<MatDialog> = {}
    const configSvc: Partial<ConfigurationsService> = {}
    const mdoinfoSrvc: Partial<MdoInfoService> = {}
    const activeRoute: Partial<ActivatedRoute> = {}

    beforeAll(() => {
        component = new BudgetComponent(
            snackBar as MatSnackBar,
            dialog as MatDialog,
            configSvc as ConfigurationsService,
            mdoinfoSrvc as MdoInfoService,
            activeRoute as ActivatedRoute
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
