const { Router } = require("express");
const { DirectCostController } = require("../controllers");

const { income_expense_cost, params, auth } = require('../middlewares');

const router = Router();

const directCostController = new DirectCostController();

router.get('/one/:id', [
    auth.validateUserToken,
    params.checkId
], directCostController.getDirectCost)

router.get('/:id', [
    auth.validateUserToken,
    params.checkId
], directCostController.getDirectCosts)

router.post('/', [
    auth.validateUserToken,
    income_expense_cost.checkIncomeOrAdministrativeExpesneOrDirectCost,
], directCostController.createDirectCost);

router.put('/:id', [
    auth.validateUserToken,
    income_expense_cost.checkPutIncomeOrAdministrativeExpesneOrDirectCost,
    params.checkId
], directCostController.updateDirectCost);

router.delete('/:id', [
    auth.validateUserToken,
    params.checkId
], directCostController.deleteDirectCost);



module.exports = router