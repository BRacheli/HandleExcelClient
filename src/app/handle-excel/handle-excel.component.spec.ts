import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HandleExcelComponent } from './handle-excel.component';

describe('HandleExcelComponent', () => {
  let component: HandleExcelComponent;
  let fixture: ComponentFixture<HandleExcelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HandleExcelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HandleExcelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
