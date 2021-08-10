import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewCashFlowComponent } from './new-cash-flow.component';

describe('NewCashFlowComponent', () => {
  let component: NewCashFlowComponent;
  let fixture: ComponentFixture<NewCashFlowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewCashFlowComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewCashFlowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
