import { Component, OnInit } from '@angular/core';
import { BudgetsService } from '../../services/budgets.service';
import { LocalStorageService } from '../../../shared/services/local-storage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-budgets-table',
  templateUrl: './budgets-table.component.html',
  styleUrls: ['./budgets-table.component.css']
})
export class BudgetsTableComponent implements OnInit {

  constructor(
    private budgetsService: BudgetsService,
    private localStorageService: LocalStorageService,
    private router: Router
  ) { }

  budgets: any = [];

  get user() {
    return this.localStorageService.getItem('user');
  }

  ngOnInit(): void {
    this.getBudgetsByUserId()
  }

  getBudgetsByUserId() {
    this.budgetsService.getBudgetsByUserId(this.user.id).subscribe((budgets) => this.budgets = budgets);
  }

  newBudget() {
    this.router.navigate(['/budgets/new'])
  }

}
