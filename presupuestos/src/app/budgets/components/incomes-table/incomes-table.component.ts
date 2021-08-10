import { Component, OnDestroy, OnInit } from '@angular/core';
import { ProviderService } from '../../../shared/services/provider.service';
import { IncomeService } from '../../services/income.service';
import { IncomeOrDirectCostOrAdministrativeExpense } from '../../interfaces/income_cost_expense.interface';
import { Subscription } from 'rxjs';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

import Swal from 'sweetalert2';

@Component({
  selector: 'app-incomes-table',
  templateUrl: './incomes-table.component.html',
  styleUrls: ['./incomes-table.component.css']
})
export class IncomesTableComponent implements OnInit, OnDestroy {

  cashflowId!: number

  private incomesSubscription!: Subscription;

  incomes!: IncomeOrDirectCostOrAdministrativeExpense[];


  constructor(
    private providerService: ProviderService,
    private incomesService: IncomeService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.cashflowId = this.providerService.cashFlowId;
    this.incomesSubscription = this.incomesService.getIncomesByCashFlowId(this.cashflowId)
      .subscribe((incomes: IncomeOrDirectCostOrAdministrativeExpense[]) => {
        this.incomes = incomes;
    })
  }

  newIncome() {
    this.router.navigate(['/budgets/new/income-expense-cost', 'income'])
  }

  deleteIncome(id: number) {
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
        this.incomesSubscription = this.incomesService.deleteIncome(id).subscribe((res) => {
          console.log(res);
          Swal.fire(
            'Eliminado!',
            `El ingreso ${res.concept} ha sido eliminado exitosamente`,
            'success'
          );
          const deleteIndex = this.incomes.indexOf(res);
          this.incomes.splice(deleteIndex, 1);
        });
      }
    });
  }

  ngOnDestroy() {
    this.incomesSubscription?.unsubscribe();
  }
  
}
