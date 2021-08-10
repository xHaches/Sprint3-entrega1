import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { LocalStorageService } from '../../../shared/services/local-storage.service';
import { Session } from '../../interfaces/session.interface';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  loginForm: FormGroup = this.fb.group({
    email: ['test@test.com', [Validators.required, Validators.email]],
    password: ['123456', [Validators.required, Validators.minLength(6)]]
  });

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private authService: AuthService,
    private localStorageService: LocalStorageService
  ) { }

  login() {
    this.authService.login(this.loginForm.value).subscribe((session: Session) => {
      this.localStorageService.setItem('user', session.user);
      this.localStorageService.setItem('token', session.token);
      this.router.navigate(['budgets'])
    }); 

  }

}
