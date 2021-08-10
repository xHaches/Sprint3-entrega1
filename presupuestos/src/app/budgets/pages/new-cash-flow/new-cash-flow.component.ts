import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CashFlowService } from '../../services/cash-flow.service';
import { ProviderService } from '../../../shared/services/provider.service';

@Component({
  selector: 'app-new-cash-flow',
  templateUrl: './new-cash-flow.component.html',
  styleUrls: ['./new-cash-flow.component.css']
})
export class NewCashFlowComponent {

  cashFlow: FormGroup = this.fb.group({
    month: ['', [Validators.required, Validators.min(1)]],
  });

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private cashFlowService: CashFlowService,
    private providerService: ProviderService
  ) { }
  
  save() {
    const proyect = this.providerService.proyect;
    const form = this.cashFlow.value;
    console.log(proyect);
    form.id_proyect = proyect.id

    this.cashFlowService.createCashFlow(form).subscribe(() => {
      this.router.navigate(['details', proyect.id])
    }); 

  }
}
