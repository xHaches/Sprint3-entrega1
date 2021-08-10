const jwt = require('jsonwebtoken');
const { validateToken } = require('../services/jwt.service');
const { getUserByEmail } = require('../services/user.service');


validateUserToken = async (req, res, next) => {
    const token = req.headers.authorization  ? req.headers.authorization.split(' ')[1] : null;
    if(!token) {
        return res.status(401).json({
            msg: 'No hay token en la petición'
        });
    }
    try {
        // jwt.verify devuelve un objeto como el sig:
        /*
        {
            data: { id: 1, email: 'test@test.com', status: 1 },
            iat: 1628372279,
            exp: 1628458679
        }
        */

        const {data} = validateToken(token);
        const user = await getUserByEmail(data.email)
        delete user.dataValues.password;
        if(JSON.stringify(data) === JSON.stringify(user.dataValues)) {
            return next();
        }
        return res.status(403).json({
            msg: 'No Tienes permiso de realizar esta acción'
        });
    } catch (error) {
        return res.status(500).json({
            msg: 'Error en la autentificación'
        });
    }
}


module.exports = {
    validateUserToken
}
