import { FileProgressComponent } from "./file-progress.component"


describe('FileProgressComponent', () => {
    let component: FileProgressComponent



    beforeAll(() => {
        component = new FileProgressComponent(

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