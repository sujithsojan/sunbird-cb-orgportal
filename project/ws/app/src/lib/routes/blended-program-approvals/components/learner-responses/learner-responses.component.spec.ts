import { ComponentFixture, TestBed } from '@angular/core/testing'

import { LearnerResponsesComponent } from './learner-responses.component'

describe('LearnerResponsesComponent', () => {
  let component: LearnerResponsesComponent
  let fixture: ComponentFixture<LearnerResponsesComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LearnerResponsesComponent]
    })
      .compileComponents()
  })

  beforeEach(() => {
    fixture = TestBed.createComponent(LearnerResponsesComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
