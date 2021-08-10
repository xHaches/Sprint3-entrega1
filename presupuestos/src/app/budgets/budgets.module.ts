import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BudgetsComponent } from './pages/budgets/budgets.component';
import { BudgetsTableComponent } from './components/budgets-table/budgets-table.component';
import { BudgetsRoutingModule } from './bugdets-routing.module';
import { BudgetsDetailsComponent } from './pages/budgets-details/budgets-details.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ProyectComponent } from './components/proyect/proyect.component';
import { CashFlowComponent } from './components/cash-flow/cash-flow.component';
import { IncomesExpensesCostsComponent } from './pages/incomes-expenses-costs/incomes-expenses-costs.component';
import { IncomesTableComponent } from './components/incomes-table/incomes-table.component';
import { DirectCostsTableComponent } from './components/direct-costs-table/direct-costs-table.component';
import { AdministrativeExpensesComponent } from './components/administrative-expenses/administrative-expenses.component';
import { IncomeExpenseCostFormComponent } from './pages/income-expense-cost-form/income-expense-cost-form.component';
import { NewIncomeExpenseCostComponent } from './pages/new-income-expense-cost/new-income-expense-cost.component';
import { NewBudgetComponent } from './pages/new-budget/new-budget.component';
import { NewCashFlowComponent } from './pages/new-cash-flow/new-cash-flow.component';



@NgModule({
  declarations: [
    BudgetsComponent,
    BudgetsTableComponent,
    BudgetsDetailsComponent,
    ProyectComponent,
    CashFlowComponent,
    IncomesExpensesCostsComponent,
    IncomesTableComponent,
    DirectCostsTableComponent,
    AdministrativeExpensesComponent,
    IncomeExpenseCostFormComponent,
    NewIncomeExpenseCostComponent,
    NewBudgetComponent,
    NewCashFlowComponent,
  ],
  imports: [
    BudgetsRoutingModule,
    ReactiveFormsModule,
    CommonModule
  ],
})
export class BudgetsModule { }
