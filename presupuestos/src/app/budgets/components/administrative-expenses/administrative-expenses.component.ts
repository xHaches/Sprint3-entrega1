import { Component, OnInit } from '@angular/core';
import { ProviderService } from '../../../shared/services/provider.service';
import { AdministrativeExpensesService } from '../../services/administrative-expenses.service';
import { IncomeOrDirectCostOrAdministrativeExpense } from '../../interfaces/income_cost_expense.interface';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

import Swal from 'sweetalert2';


@Component({
  selector: 'app-administrative-expenses',
  templateUrl: './administrative-expenses.component.html',
  styleUrls: ['./administrative-expenses.component.css']
})
export class AdministrativeExpensesComponent implements OnInit {

  cashflowId!: number

  private incomesSubscription!: Subscription;

  expenses!: IncomeOrDirectCostOrAdministrativeExpense[];


  constructor(
    private providerService: ProviderService,
    private administrativeExpensesService: AdministrativeExpensesService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.cashflowId = this.providerService.cashFlowId;
    this.incomesSubscription = this.administrativeExpensesService.getAdministrativeExpenseByCashFlowId(this.cashflowId)
      .subscribe((expenses: IncomeOrDirectCostOrAdministrativeExpense[]) => {
        this.expenses = expenses;
    })
  }

  newAdministrativeExpense() {
    this.router.navigate(['/budgets/new/income-expense-cost', 'expense'])
  }

  deleteAdministrativeExpense(id: number) {
    Swal.fire({
      title: '¿Seguro?',
      text: "Estás a punto de eliminar un Item",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Salir',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        this.incomesSubscription = this.administrativeExpensesService.deleteAdministrativeExpense(id).subscribe((res) => {
          console.log(res);
          Swal.fire(
            'Eliminado!',
            `El ingreso ${res.concept} ha sido eliminado exitosamente`,
            'success'
          );
          const deleteIndex = this.expenses.indexOf(res);
          this.expenses.splice(deleteIndex, 1);
        });
      }
    });
  }

  ngOnDestroy() {
    this.incomesSubscription?.unsubscribe();
  }
}
