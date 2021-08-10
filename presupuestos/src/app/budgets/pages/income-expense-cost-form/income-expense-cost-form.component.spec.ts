import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IncomeExpenseCostFormComponent } from './income-expense-cost-form.component';

describe('IncomeExpenseCostFormComponent', () => {
  let component: IncomeExpenseCostFormComponent;
  let fixture: ComponentFixture<IncomeExpenseCostFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IncomeExpenseCostFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IncomeExpenseCostFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
