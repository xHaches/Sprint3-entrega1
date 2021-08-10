import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdministrativeExpensesComponent } from './administrative-expenses.component';

describe('AdministrativeExpensesComponent', () => {
  let component: AdministrativeExpensesComponent;
  let fixture: ComponentFixture<AdministrativeExpensesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdministrativeExpensesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdministrativeExpensesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
