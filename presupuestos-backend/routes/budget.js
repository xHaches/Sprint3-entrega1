const { Router } = require("express");
const { BudgetController } = require("../controllers");

const { params, auth } = require('../middlewares');

const router = Router();

const budgetController = new BudgetController();

router.get('/:id', [
    auth.validateUserToken,
    params.checkId,
], budgetController.getBudgets)


module.exports = router