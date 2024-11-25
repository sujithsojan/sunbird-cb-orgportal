

import { ElementRef } from '@angular/core'
import { OptionComponent } from './option.component'


describe('OptionComponent', () => {
    let component: OptionComponent

    const host: Partial<ElementRef> = {}

    beforeAll(() => {
        component = new OptionComponent(
            host as ElementRef
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