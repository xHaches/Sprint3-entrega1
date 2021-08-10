const AuthController = require("./auth");
const ProyectController = require('./proyect');
const CashFlowController = require('./cash_flow');
const IncomeController = require('./income');
const AdministativeExpenseController = require('./administrative_expense');
const DirectCostController = require('./direct_cost');
const ResourceController = require('./resource');
const BudgetController = require('./budget');

module.exports = {
    AuthController,
    ProyectController,
    CashFlowController,
    IncomeController,
    AdministativeExpenseController,
    DirectCostController,
    ResourceController,
    BudgetController
}