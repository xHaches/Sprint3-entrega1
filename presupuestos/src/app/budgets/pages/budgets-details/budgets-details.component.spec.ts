import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BudgetsDetailsComponent } from './budgets-details.component';

describe('BudgetsDetailsComponent', () => {
  let component: BudgetsDetailsComponent;
  let fixture: ComponentFixture<BudgetsDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BudgetsDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BudgetsDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
