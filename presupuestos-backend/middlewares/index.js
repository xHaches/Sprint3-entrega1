const proyect = require("./proyect");
const cashFlow = require('./cash_flow');
const income_expense_cost = require('./income_expense_cost.dto');
const params = require('./params');
const resource = require('./resource');

const login = require("./login");
const auth = require('./auth');

module.exports = {
    login,
    proyect,
    cashFlow,
    income_expense_cost,
    params,
    resource,
    auth
}