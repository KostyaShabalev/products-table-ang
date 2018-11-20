import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DatasetOptionsComponent } from './dataset-options.component';

describe('DatasetOptionsComponent', () => {
  let component: DatasetOptionsComponent;
  let fixture: ComponentFixture<DatasetOptionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DatasetOptionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DatasetOptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
