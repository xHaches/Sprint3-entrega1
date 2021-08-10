const { Router } = require("express");
const { IncomeController } = require("../controllers");

const { income_expense_cost, params, auth } = require('../middlewares');

const router = Router();

const incomeController = new IncomeController();

router.get('/one/:id', [
    auth.validateUserToken,
    params.checkId,
], incomeController.getIncome);

router.get('/:id', [
    auth.validateUserToken,
    params.checkId,
], incomeController.getIncomes);

router.post('/', [
    auth.validateUserToken,
    income_expense_cost.checkIncomeOrAdministrativeExpesneOrDirectCost,
], incomeController.createIncome);

router.put('/:id', [
    auth.validateUserToken,
    income_expense_cost.checkPutIncomeOrAdministrativeExpesneOrDirectCost,
    params.checkId
], incomeController.updateIncome);

router.delete('/:id', [
    auth.validateUserToken,
    params.checkId
], incomeController.deleteIncome);



module.exports = router