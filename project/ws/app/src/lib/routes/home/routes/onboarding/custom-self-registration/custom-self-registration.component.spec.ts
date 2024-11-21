import { ComponentFixture, TestBed } from '@angular/core/testing'

import { CustomSelfRegistrationComponent } from './custom-self-registration.component'

describe('CustomSelfRegistrationComponent', () => {
  let component: CustomSelfRegistrationComponent
  let fixture: ComponentFixture<CustomSelfRegistrationComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CustomSelfRegistrationComponent],
    })
    .compileComponents()
  })

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomSelfRegistrationComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
