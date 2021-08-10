const { Router } = require("express");
const { ProyectController } = require("../controllers");

const { proyect, auth, params } = require('../middlewares');

const router = Router();

const proyectController = new ProyectController();

router.get('/:id', [
    params.checkId,
    auth.validateUserToken,
], proyectController.getProyect)

router.post('/', [
    auth.validateUserToken,
    proyect.checkProyect
], proyectController.createProyect);

router.put('/', [
    auth.validateUserToken,
    proyect.checkPutProyect
], proyectController.updateProyect);




module.exports = router