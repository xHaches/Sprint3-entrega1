import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { IncomeOrDirectCostOrAdministrativeExpense } from '../interfaces/income_cost_expense.interface';
import { take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class IncomeService {

  private baseUrl = environment.baseUrl;


  constructor(
    private http: HttpClient
  ) { }


  newIncome(body: any){
    return this.http.post<IncomeOrDirectCostOrAdministrativeExpense>(`${this.baseUrl}/incomes`, body).pipe(
      take(1)
    )
  }

  getIncomeById(id: number) {
    return this.http.get<IncomeOrDirectCostOrAdministrativeExpense>(`${this.baseUrl}/incomes/one/${id}`).pipe(
      take(1)
    )
  }


  getIncomesByCashFlowId(id_cash_flow: number) {
    return this.http.get<IncomeOrDirectCostOrAdministrativeExpense[]>(`${this.baseUrl}/incomes/${id_cash_flow}`).pipe(
      take(1)
    )
  }

  updateIncome(id: number, body: any) {
    return this.http.put<IncomeOrDirectCostOrAdministrativeExpense>(`${this.baseUrl}/incomes/${id}`, body).pipe(
      take(1)
    )
  }

  deleteIncome(id: number) {
    return this.http.delete<IncomeOrDirectCostOrAdministrativeExpense>(`${this.baseUrl}/incomes/${id}`).pipe(
      take(1)
    )
  }

}
