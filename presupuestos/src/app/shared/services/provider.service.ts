import { Injectable } from '@angular/core';
import { Proyect } from '../../budgets/interfaces/proyect.interface';

@Injectable({
  providedIn: 'root'
})
export class ProviderService {

  private _proyect!: Proyect;

  private _cashFlowId!: number;

  private _incomeExpenseCostId!: number;

  private _term!: string;

  get proyect() {
    return this._proyect;
  }

  set proyect(proyect: Proyect) {
    this._proyect = proyect;
  }

  get cashFlowId() {
    return this._cashFlowId;
  }

  set cashFlowId(id: number) {
    this._cashFlowId = id;
  }

  get incomeExpenseCostId() {
    return this._incomeExpenseCostId;
  }

  set incomeExpenseCostId(id: number) {
    this._incomeExpenseCostId = id;
  }

  get term() {
    return this._term;
  }

  set term(term: string) {
    this._term = term;
  }

  constructor() { }
}
