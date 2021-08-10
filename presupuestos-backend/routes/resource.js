const { Router } = require("express");
const { ResourceController } = require("../controllers");

const { resource, params, auth } = require('../middlewares');

const router = Router();

const resourceController = new ResourceController();

router.get('/:id', [
    auth.validateUserToken,
    params.checkId
], resourceController.getResources)

router.post('/', [
    auth.validateUserToken,
    resource.checkProyect,
], resourceController.createResource);

router.put('/:id', [
    auth.validateUserToken,
    resource.checkPutProyect,
    params.checkId
], resourceController.updateIncome);

router.delete('/:id', [
    auth.validateUserToken,
    params.checkId
], resourceController.deleteIncome);



module.exports = router