import { Component, OnDestroy, OnInit } from '@angular/core';
import { ProviderService } from '../../../shared/services/provider.service';
import { IncomeService } from '../../services/income.service';
import { CashFlowService } from '../../services/cash-flow.service';
import { CashFlow } from '../../interfaces/cash-flow.interface';
import { Observer, Subscription } from 'rxjs';
import { IncomeOrDirectCostOrAdministrativeExpense } from '../../interfaces/income_cost_expense.interface';
import { take } from 'rxjs/operators';
import { DirectCostService } from '../../services/direct-cost.service';
import { AdministrativeExpensesService } from '../../services/administrative-expenses.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cash-flow',
  templateUrl: './cash-flow.component.html',
  styleUrls: ['./cash-flow.component.css']
})
export class CashFlowComponent implements OnInit, OnDestroy {

  cashFlowsSubscription!: Subscription;

  private _cashFlows!: CashFlow[];
  private _incomes: any = {};
  private _totalIncomes!: number;

  private _directCosts: any = {};
  private _totalDirectCosts!: number;

  private _administrativeExpenses: any = {};
  private _totalAdministrativeExpenses!: number;


  private incomesSubscription!: Subscription;
  private directCostsSubscription!: Subscription;
  private administrativeExpensesSubscription!: Subscription;

  constructor(
    private provider: ProviderService,
    private incomeService: IncomeService,
    private directCostService: DirectCostService,
    private administrativeExpensesService: AdministrativeExpensesService,
    private cashFlowService: CashFlowService,
    private router: Router
  ) { }

  get proyect() {
    return this.provider.proyect;
  }

  newCashFlow() {
    this.router.navigate(['/budgets/new/cash-flow'])
  }


  get cashFlows(): CashFlow[] {
    if(this.proyect?.id && !this._cashFlows){
      this.cashFlowService.getCashFlowsByProyectId(this.proyect.id).pipe(
        take(1)
      ).subscribe((cashFlows: CashFlow[]) => {
        this._cashFlows = cashFlows;
      });
    }
    return this._cashFlows
  }

  set cashFlows(cashFlows: CashFlow[]) {
    this._cashFlows = cashFlows;
  }


  ngOnInit(): void {
    
  }

  get incomes(): IncomeOrDirectCostOrAdministrativeExpense[][] {
    if(this._cashFlows && Object.values(this._incomes).length === 0) {
      console.log(this._cashFlows && Object.values(this._incomes).length === 0);
      this._cashFlows.forEach((cashFlow, index) => {
        this.incomesSubscription = this.incomeService.getIncomesByCashFlowId(cashFlow.id).subscribe((incomes: IncomeOrDirectCostOrAdministrativeExpense[]) => {
          this._incomes[cashFlow.id] = incomes;
          this.totalIncomes = cashFlow.id; 
          console.log(this._incomes);
        });
      });
    }
    return this._incomes;
  }

  set totalIncomes(index: number) {
    this._totalIncomes = Object.values(this.incomes[index]).reduce((acc, curr) => acc + curr.amount, 0);
  }
  
  get totalIncomes() {
    this.incomes;
    return this._totalIncomes;
  }

  get directCosts(): IncomeOrDirectCostOrAdministrativeExpense[][] {
    if(this._cashFlows && Object.values(this._directCosts).length === 0) {
      console.log(this._cashFlows && Object.values(this._directCosts).length === 0);
      this._cashFlows.forEach((cashFlow, index) => {
        this.directCostsSubscription = this.directCostService.getDirectCostByCashFlowId(cashFlow.id).subscribe((directCosts: IncomeOrDirectCostOrAdministrativeExpense[]) => {
          this._directCosts[cashFlow.id] = directCosts;
          this.totalDirectCosts = cashFlow.id; 
        });
      });
    }
    return this._directCosts;
  }

  set totalDirectCosts(index: number) {
    this._totalDirectCosts = Object.values(this.directCosts[index]).reduce((acc, curr) => acc + curr.amount, 0);
  }

  get totalDirectCosts() {
    this.directCosts;
    return this._totalDirectCosts;
  }


// *********************************************************** gastos administrativos


  get administrativeExpenses(): IncomeOrDirectCostOrAdministrativeExpense[][] {
    if(this._cashFlows && Object.values(this._administrativeExpenses).length === 0) {
      console.log(this._cashFlows && Object.values(this._administrativeExpenses).length === 0);
      this._cashFlows.forEach((cashFlow, index) => {
        this.administrativeExpensesSubscription = this.administrativeExpensesService.getAdministrativeExpenseByCashFlowId(cashFlow.id).subscribe((administrativeExpenses: IncomeOrDirectCostOrAdministrativeExpense[]) => {
          this._administrativeExpenses[cashFlow.id] = administrativeExpenses;
          this.totalAdministrativeExpenses = cashFlow.id; 
        });
      });
    }
    return this._administrativeExpenses;
  }

  set totalAdministrativeExpenses(index: number) {
    this._totalAdministrativeExpenses = Object.values(this.administrativeExpenses[index]).reduce((acc, curr) => acc + curr.amount, 0);
  }

  get totalAdministrativeExpenses() {
    this.administrativeExpenses;
    return this._totalAdministrativeExpenses;
  }

  get total() {
    return (this.totalIncomes - this.totalDirectCosts - this.totalAdministrativeExpenses) || 0;
  }

  get accumulated() {
    return this.total;
  }

  ngOnDestroy() {
    this.incomesSubscription?.unsubscribe();
    this.directCostsSubscription?.unsubscribe();
    this.administrativeExpensesSubscription?.unsubscribe();
  }
  
}
