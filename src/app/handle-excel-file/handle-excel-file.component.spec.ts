import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HandleExcelFileComponent } from './handle-excel-file.component';

describe('HandleExcelFileComponent', () => {
  let component: HandleExcelFileComponent;
  let fixture: ComponentFixture<HandleExcelFileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HandleExcelFileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HandleExcelFileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
