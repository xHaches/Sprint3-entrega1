import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Session } from '../interfaces/session.interface';
import { User } from '../interfaces/user.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {


  private baseUrl = environment.baseUrl;

  constructor(
    private http: HttpClient
  ) { }


  login(form: FormData): Observable<Session> {
    return this.http.post<Session>(`${this.baseUrl}/auth`, form);
  }

  validateToken() {
    return this.http.get<User | any>(`${this.baseUrl}/auth/refresh`);
  }

}
