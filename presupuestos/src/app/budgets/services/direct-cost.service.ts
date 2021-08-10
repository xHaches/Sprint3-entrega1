import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { IncomeOrDirectCostOrAdministrativeExpense } from '../interfaces/income_cost_expense.interface';
import { take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DirectCostService {

  private baseUrl = environment.baseUrl;


  constructor(
    private http: HttpClient
  ) { }


  newDirectCost(body: any){
    return this.http.post<IncomeOrDirectCostOrAdministrativeExpense>(`${this.baseUrl}/direct-costs`, body).pipe(
      take(1)
    )
  }

  getDirectCostById(id: number) {
    return this.http.get<IncomeOrDirectCostOrAdministrativeExpense>(`${this.baseUrl}/direct-costs/one/${id}`).pipe(
      take(1)
    )
  }

  getDirectCostByCashFlowId(id_cash_flow: number) {
    return this.http.get<IncomeOrDirectCostOrAdministrativeExpense[]>(`${this.baseUrl}/direct-costs/${id_cash_flow}`).pipe(
      take(1)
    )
  }

  updatetDirectCost(id: number, body: any) {
    return this.http.put<IncomeOrDirectCostOrAdministrativeExpense>(`${this.baseUrl}/direct-costs/${id}`, body).pipe(
      take(1)
    )
  }

  deleteDirectCost(id: number) {
    return this.http.delete<IncomeOrDirectCostOrAdministrativeExpense>(`${this.baseUrl}/direct-costs/${id}`).pipe(
      take(1)
    )
  }
  
}
