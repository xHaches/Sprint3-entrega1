import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { CashFlow } from '../interfaces/cash-flow.interface';
import { take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CashFlowService {

  private baseUrl = environment.baseUrl;


  constructor(
    private http: HttpClient,
  ) { }

  createCashFlow(body: any) {
    return this.http.post(`${this.baseUrl}/cash-flows`, body);
  }

  getCashFlowsByProyectId(id_proyect: number) {
    return this.http.get<CashFlow[]>(`${this.baseUrl}/cash-flows/${id_proyect}`).pipe(
      take(1)
    );
  }
}
