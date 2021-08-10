import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProviderService } from '../../../shared/services/provider.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IncomeService } from '../../services/income.service';
import { AdministrativeExpensesService } from '../../services/administrative-expenses.service';
import { DirectCostService } from '../../services/direct-cost.service';
import { Subscription } from 'rxjs';
import { IncomeOrDirectCostOrAdministrativeExpense } from '../../interfaces/income_cost_expense.interface';

@Component({
  selector: 'app-income-expense-cost-form',
  templateUrl: './income-expense-cost-form.component.html',
  styleUrls: ['./income-expense-cost-form.component.css']
})
export class IncomeExpenseCostFormComponent implements OnInit, OnDestroy {

  private itemSubscription!: Subscription;
  private getItemSubsripcion!: Subscription;

  term!: string;
  itemId!: number;

  item: any = {};

  itemForm: FormGroup = this.fb.group({
    id: ['', [Validators.required]],
    concept: ['', [Validators.required, Validators.minLength(3)]],
    amount: ['', [Validators.required, Validators.min(0)]],
  });

  constructor(
    private route: ActivatedRoute,
    private providerService: ProviderService,
    private fb: FormBuilder,
    private incomeService: IncomeService,
    private administrativeExpensesService: AdministrativeExpensesService,
    private directCostsService: DirectCostService
  ) { }

  ngOnInit(): void {
    this.providerService.term = this.route.snapshot.paramMap.get('term') || '';
    this.term = this.providerService.term;
    this.providerService.incomeExpenseCostId = +this.route.snapshot.paramMap.get('id')!;
    this.itemId = this.providerService.incomeExpenseCostId;
    this.getItem(this.term);
  }

  getItem(term: string) {
    const formOptions: any = {
      '': () => 'Error, elija un item',
      'income': () => this.itemSubscription = this.incomeService.getIncomeById(this.itemId).subscribe(res => {
        delete res.id_cash_flow;
        this.itemForm.setValue(res)
      }),
      'cost': () => this.itemSubscription = this.directCostsService.getDirectCostById(this.itemId).subscribe(res => {
        delete res.id_cash_flow;
        this.itemForm.setValue(res)
      }),
      'expense': () => this.itemSubscription = this.administrativeExpensesService.getAdministrativeExpenseById(this.itemId).subscribe(res => {
        delete res.id_cash_flow;
        this.itemForm.setValue(res)
      }),
      'default': () => 'No valido'
    }

    formOptions[term] ? formOptions[term]() : formOptions['default']; 
  }

  updateItem(term: string) {
    const putItem = this.itemForm.value;
    delete putItem.id;
    const formOptions: any = {
      '': () => 'Error, elija un item',
      'income': () => this.itemSubscription = this.incomeService.updateIncome(this.itemId, putItem).subscribe(res => this.itemForm.reset(res)),
      'cost': () => this.itemSubscription = this.directCostsService.updatetDirectCost(this.itemId, this.itemForm.value).subscribe(res => this.itemForm.reset(res)),
      'expense': () => this.itemSubscription = this.administrativeExpensesService.updateAdministrativeExpense(this.itemId, this.itemForm.value).subscribe(res => this.itemForm.reset(res)),
      'default': () => 'No valido'
    }

    formOptions[term] ? formOptions[term]() : formOptions['default']; 
  }

  ngOnDestroy() {
    this.itemSubscription?.unsubscribe();
    this.getItemSubsripcion?.unsubscribe();
  }

}
