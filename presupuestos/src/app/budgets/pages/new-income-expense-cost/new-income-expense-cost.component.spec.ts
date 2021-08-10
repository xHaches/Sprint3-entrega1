import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewIncomeExpenseCostComponent } from './new-income-expense-cost.component';

describe('NewIncomeExpenseCostComponent', () => {
  let component: NewIncomeExpenseCostComponent;
  let fixture: ComponentFixture<NewIncomeExpenseCostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewIncomeExpenseCostComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewIncomeExpenseCostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
