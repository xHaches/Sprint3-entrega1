const { Router } = require("express");
const { AdministativeExpenseController } = require("../controllers");

const { income_expense_cost, params, auth } = require('../middlewares');

const router = Router();

const administativeExpenseController = new AdministativeExpenseController();

router.get('/one/:id', [
    auth.validateUserToken,
    params.checkId
], administativeExpenseController.getAdministrativeExpense);

router.get('/:id', [
    auth.validateUserToken,
    params.checkId
], administativeExpenseController.getAdministrativeExpenses);

router.post('/', [
    auth.validateUserToken,
    income_expense_cost.checkIncomeOrAdministrativeExpesneOrDirectCost,
], administativeExpenseController.createAdministrativeExpense);

router.put('/:id', [
    auth.validateUserToken,
    income_expense_cost.checkPutIncomeOrAdministrativeExpesneOrDirectCost,
    params.checkId
], administativeExpenseController.updateAdministrativeExpense);

router.delete('/:id', [
    auth.validateUserToken,
    params.checkId
], administativeExpenseController.deleteAdministrativeExpense);



module.exports = router