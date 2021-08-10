import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectCostsTableComponent } from './direct-costs-table.component';

describe('DirectCostsTableComponent', () => {
  let component: DirectCostsTableComponent;
  let fixture: ComponentFixture<DirectCostsTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DirectCostsTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DirectCostsTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
