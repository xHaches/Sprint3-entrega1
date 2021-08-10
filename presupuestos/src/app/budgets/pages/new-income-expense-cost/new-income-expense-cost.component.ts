import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProviderService } from '../../../shared/services/provider.service';
import { IncomeService } from '../../services/income.service';
import { AdministrativeExpensesService } from '../../services/administrative-expenses.service';
import { DirectCostService } from '../../services/direct-cost.service';
import { Subscription } from 'rxjs';

import Swal from 'sweetalert2';


@Component({
  selector: 'app-new-income-expense-cost',
  templateUrl: './new-income-expense-cost.component.html',
  styleUrls: ['./new-income-expense-cost.component.css']
})
export class NewIncomeExpenseCostComponent implements OnInit {

  private itemSubscription!: Subscription;
  private getItemSubsripcion!: Subscription;

  term!: string;
  itemId!: number;

  item: any = {};

  cashFlowId!: number;

  itemForm: FormGroup = this.fb.group({
    concept: ['', [Validators.required, Validators.minLength(3)]],
    amount: ['', [Validators.required, Validators.min(0)]],
  });

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private providerService: ProviderService,
    private fb: FormBuilder,
    private incomeService: IncomeService,
    private administrativeExpensesService: AdministrativeExpensesService,
    private directCostsService: DirectCostService
  ) { }

  ngOnInit(): void {
    this.providerService.term = this.route.snapshot.paramMap.get('term') || '';
    this.term = this.providerService.term;
    console.log(this.providerService.cashFlowId);
    this.cashFlowId = this.providerService.cashFlowId;

  }

  newItem(term: string) {
    const putItem = this.itemForm.value;
    putItem.id_cash_flow = this.cashFlowId;
    console.log(putItem);
    const formOptions: any = {
      '': () => 'Error, elija un item',
      'income': () => this.itemSubscription = this.incomeService.newIncome(putItem).subscribe(res => this.itemForm.reset(res)),
      'cost': () => this.itemSubscription = this.directCostsService.newDirectCost(putItem).subscribe(res => this.itemForm.reset(res)),
      'expense': () => this.itemSubscription = this.administrativeExpensesService.newAdministrativeExpense(putItem).subscribe(res => this.itemForm.reset(res)),
      'default': () => 'No valido'
    }

    Swal.fire(`${term} creado!`).then(() => {
      this.router.navigate(['/budgets/incomes-expenses-costs/', this.cashFlowId]);
    });

    formOptions[term] ? formOptions[term]() : formOptions['default']; 
  }

  ngOnDestroy() {
    this.itemSubscription?.unsubscribe();
    this.getItemSubsripcion?.unsubscribe();
  }
}
