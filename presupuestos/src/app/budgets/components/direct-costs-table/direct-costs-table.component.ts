import { Component, OnInit } from '@angular/core';
import { ProviderService } from '../../../shared/services/provider.service';
import { IncomeOrDirectCostOrAdministrativeExpense } from '../../interfaces/income_cost_expense.interface';
import { DirectCostService } from '../../services/direct-cost.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

import Swal from 'sweetalert2';


@Component({
  selector: 'app-direct-costs-table',
  templateUrl: './direct-costs-table.component.html',
  styleUrls: ['./direct-costs-table.component.css']
})
export class DirectCostsTableComponent implements OnInit {

  cashflowId!: number

  private incomesSubscription!: Subscription;

  directCosts!: IncomeOrDirectCostOrAdministrativeExpense[];


  constructor(
    private providerService: ProviderService,
    private directCostService: DirectCostService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.cashflowId = this.providerService.cashFlowId;
    this.incomesSubscription = this.directCostService.getDirectCostByCashFlowId(this.cashflowId)
      .subscribe((directCosts: IncomeOrDirectCostOrAdministrativeExpense[]) => {
        this.directCosts = directCosts;
    })
  }

  newDirectCost() {
    this.router.navigate(['/budgets/new/income-expense-cost', 'cost'])
  }

  deleteDirectCost(id: number) {
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
        this.incomesSubscription = this.directCostService.deleteDirectCost(id).subscribe((res) => {
          console.log(res);
          Swal.fire(
            'Eliminado!',
            `El ingreso ${res.concept} ha sido eliminado exitosamente`,
            'success'
          );
          const deleteIndex = this.directCosts.indexOf(res);
          this.directCosts.splice(deleteIndex, 1);
        });
      }
    });
  }

  ngOnDestroy() {
    this.incomesSubscription?.unsubscribe();
  }
}
