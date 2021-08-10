const userService = require("./user.service");
const jwtService = require('./jwt.service');
const proyectService = require('./proyect.service');
const budgetService = require('./budget.service');
const cashFlowService = require('./cash_flow.service');
const incomeService = require('./income.service');
const administrativeExpenseService = require('./administrative_expenses.service');
const directCostService = require('./direct_cost.service');
const resourceService = require('./resource');

module.exports = {
    userService,
    jwtService,
    proyectService,
    budgetService,
    cashFlowService,
    incomeService,
    administrativeExpenseService,
    directCostService,
    resourceService
}
