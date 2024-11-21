import { ComponentFixture, TestBed } from '@angular/core/testing'

import { GroupsGradeComponent } from './groups-grade.component'

describe('GroupsGradeComponent', () => {
  let component: GroupsGradeComponent
  let fixture: ComponentFixture<GroupsGradeComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GroupsGradeComponent],
    })
    .compileComponents()
  })

  beforeEach(() => {
    fixture = TestBed.createComponent(GroupsGradeComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
