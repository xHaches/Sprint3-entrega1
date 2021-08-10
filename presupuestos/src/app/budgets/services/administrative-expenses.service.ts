import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { IncomeOrDirectCostOrAdministrativeExpense } from '../interfaces/income_cost_expense.interface';
import { take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AdministrativeExpensesService {

  private baseUrl = environment.baseUrl;


  constructor(
    private http: HttpClient
  ) { }

  newAdministrativeExpense(body: any){
    return this.http.post<IncomeOrDirectCostOrAdministrativeExpense>(`${this.baseUrl}/administrative-expenses`, body).pipe(
      take(1)
    )
  }

  getAdministrativeExpenseById(id: number) {
    return this.http.get<IncomeOrDirectCostOrAdministrativeExpense>(`${this.baseUrl}/administrative-expenses/one/${id}`).pipe(
      take(1)
    )
  }

  getAdministrativeExpenseByCashFlowId(id_cash_flow: number) {
    return this.http.get<IncomeOrDirectCostOrAdministrativeExpense[]>(`${this.baseUrl}/administrative-expenses/${id_cash_flow}`).pipe(
      take(1)
    )
  }

  updateAdministrativeExpense(id: number, body: any) {
    return this.http.put<IncomeOrDirectCostOrAdministrativeExpense>(`${this.baseUrl}/administrative-expenses/${id}`, body).pipe(
      take(1)
    )
  }

  deleteAdministrativeExpense(id: number) {
    return this.http.delete<IncomeOrDirectCostOrAdministrativeExpense>(`${this.baseUrl}/administrative-expenses/${id}`).pipe(
      take(1)
    )
  }
}
