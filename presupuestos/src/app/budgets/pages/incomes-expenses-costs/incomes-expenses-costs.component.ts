import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProviderService } from '../../../shared/services/provider.service';

@Component({
  selector: 'app-incomes-expenses-costs',
  templateUrl: './incomes-expenses-costs.component.html',
  styleUrls: ['./incomes-expenses-costs.component.css']
})
export class IncomesExpensesCostsComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private providerService: ProviderService
  ) { }

  ngOnInit(): void {
    this.providerService.cashFlowId = +this.route.snapshot.paramMap.get('id')!;
  }

}
