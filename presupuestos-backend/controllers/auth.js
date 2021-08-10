const { userService } = require("../services");
const { validateToken } = require("../services/jwt.service");




class AuthController{
    async login(req, res) {
        const { email, password } = req.body;
        try {
            const response = await userService.login(email, password);
            if(response.error){
                return res.status(response.status).json({msg: response.msg});
            }
            const {user, token} = response;
            return res.json({
                user, token
            })
        } catch (err) {
            console.log(err);
            return res.status(500).json({
                msg: 'Hable con el administrador'
            })
        }
    }

    validateSession(req, res) {
        const token = req.headers.authorization  ? req.headers.authorization.split(' ')[1] : null;
        if(!token) {
            return res.status(401).json({
                msg: 'No hay token en la petición'
            });
        }
        const response = validateToken(token);
        if(response.error){
            return res.status(response.status).json({msg: response.msg});
        }
        return res.json(response.data);
    }
}


module.exports = AuthController;