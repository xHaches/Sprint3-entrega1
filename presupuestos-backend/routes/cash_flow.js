const { Router } = require("express");
const { CashFlowController } = require("../controllers");

const { cashFlow, auth, params } = require('../middlewares');

const router = Router();

const cashFlowController = new CashFlowController();

router.get('/:id', [
    params.checkId,
    auth.validateUserToken
], cashFlowController.getCashFlows)

router.post('/', [
    auth.validateUserToken,
    cashFlow.checkCashFlow
], cashFlowController.createCashFlow);





module.exports = router