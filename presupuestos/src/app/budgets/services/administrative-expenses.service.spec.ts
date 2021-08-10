import { TestBed } from '@angular/core/testing';

import { AdministrativeExpensesService } from './administrative-expenses.service';

describe('AdministrativeExpensesService', () => {
  let service: AdministrativeExpensesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdministrativeExpensesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
