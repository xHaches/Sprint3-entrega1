

export interface IncomeOrDirectCostOrAdministrativeExpense {
    id: number,
    concept: string,
    amount: number,
    id_cash_flow?: number
}