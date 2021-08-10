const { Router } = require("express");
const { AuthController } = require("../controllers");

const { login, auth } = require('../middlewares');


const router = Router();

const authController = new AuthController();

router.post('/', [
    login.checkEmailAndPassword
], authController.login);

router.get('/refresh', [
    auth.validateUserToken,
], authController.validateSession)


module.exports = router