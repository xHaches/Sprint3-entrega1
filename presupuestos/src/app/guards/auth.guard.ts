import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanLoad, Route, Router, RouterStateSnapshot, UrlSegment, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { AuthService } from '../auth/services/auth.service';
import { User } from '../auth/interfaces/user.interface';
import { LocalStorageService } from '../shared/services/local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanLoad {
  
  constructor(
    private authService: AuthService,
    private router: Router,
    private localStorageService: LocalStorageService
    ) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean  {
      const token = this.localStorageService.getItem('token');
      if(token) {
        return true;
      }
      return false;
    }

  canLoad(
    route: Route,
    segments: UrlSegment[]): Observable<boolean> | Promise<boolean> | boolean {
      const token = this.localStorageService.getItem('token');
      if(token) {
        return true;
      }
      return false;
    }
}
