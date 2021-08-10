import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IncomesExpensesCostsComponent } from './incomes-expenses-costs.component';

describe('IncomesExpensesCostsComponent', () => {
  let component: IncomesExpensesCostsComponent;
  let fixture: ComponentFixture<IncomesExpensesCostsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IncomesExpensesCostsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IncomesExpensesCostsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
