import { DownloadAllocationComponent } from "./download-allocation.component"


describe('DownloadAllocationComponent', () => {
    let component: DownloadAllocationComponent



    beforeAll(() => {
        component = new DownloadAllocationComponent(

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