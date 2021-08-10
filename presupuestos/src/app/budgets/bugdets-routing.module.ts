import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BudgetsDetailsComponent } from './pages/budgets-details/budgets-details.component';
import { BudgetsComponent } from './pages/budgets/budgets.component';
import { IncomesExpensesCostsComponent } from './pages/incomes-expenses-costs/incomes-expenses-costs.component';
import { IncomeExpenseCostFormComponent } from './pages/income-expense-cost-form/income-expense-cost-form.component';
import { NewIncomeExpenseCostComponent } from './pages/new-income-expense-cost/new-income-expense-cost.component';
import { NewBudgetComponent } from './pages/new-budget/new-budget.component';
import { NewCashFlowComponent } from './pages/new-cash-flow/new-cash-flow.component';

const routes: Routes = [
    {
        path: '',
        children: [
            { path: '', component: BudgetsComponent },
            { path: 'details/:id', component: BudgetsDetailsComponent },
            { path: 'incomes-expenses-costs/:id', component: IncomesExpensesCostsComponent },
            { path: 'form/:id/:term', component: IncomeExpenseCostFormComponent },
            { path: 'new', component: NewBudgetComponent },
            { path: 'new/cash-flow', component: NewCashFlowComponent },
            { path: 'new/income-expense-cost/:term', component: NewIncomeExpenseCostComponent },
            { path: '**', redirectTo: '', pathMatch: 'full' }
        ]
    }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class BudgetsRoutingModule {}