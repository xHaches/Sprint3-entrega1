import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../../auth/services/auth.service';
import { LocalStorageService } from '../../../shared/services/local-storage.service';
import { ProyectsService } from '../../services/proyects.service';

@Component({
  selector: 'app-new-budget',
  templateUrl: './new-budget.component.html',
  styleUrls: ['./new-budget.component.css']
})
export class NewBudgetComponent {

  budgetForm: FormGroup = this.fb.group({
    version: ['', [Validators.required, Validators.email]],
    months: ['', [Validators.required, Validators.minLength(6)]],
    date: ['', [Validators.required]],
    title: ['', [Validators.required, Validators.minLength(6)]]
  });

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private proyectService: ProyectsService,
    private localStorageService: LocalStorageService
  ) { }
  
  save() {
    const user = this.localStorageService.getItem('user');
    const form = this.budgetForm.value;

    form.id_user = user.id

    this.proyectService.newProyect(form).subscribe(() => {
      this.router.navigate(['budgets'])
    }); 

  }
}
