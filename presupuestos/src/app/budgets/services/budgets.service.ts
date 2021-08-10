import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BudgetsService {

  private baseUrl = environment.baseUrl;


  constructor(
    private http: HttpClient
  ) { }

  getBudgetsByUserId(id: number) {
    return this.http.get(`${this.baseUrl}/budgets/${id}`);
  }


}
