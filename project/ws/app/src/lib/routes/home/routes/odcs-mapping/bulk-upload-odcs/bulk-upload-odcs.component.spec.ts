import { async, ComponentFixture, TestBed } from '@angular/core/testing'

import { BulkUploadOdcsComponent } from './bulk-upload-odcs.component'

describe('BulkUploadOdcsComponent', () => {
  let component: BulkUploadOdcsComponent
  let fixture: ComponentFixture<BulkUploadOdcsComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [BulkUploadOdcsComponent],
    })
    .compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(BulkUploadOdcsComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
