
import { HttpClient } from '@angular/common/http'
import { MatSnackBar } from '@angular/material/snack-bar'
import { FileService } from './upload.service'

describe('FileService', () => {
    let component: FileService

    const http: Partial<HttpClient> = {}
    const matSnackBar: Partial<MatSnackBar> = {}

    beforeAll(() => {
        component = new FileService(
            http as HttpClient,
            matSnackBar as MatSnackBar
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