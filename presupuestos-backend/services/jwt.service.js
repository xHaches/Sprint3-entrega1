const jwt = require('jsonwebtoken');

const generateJWT = (user) => {
    return new Promise((resolve, reject) => {
        const payload = user;
        jwt.sign({data: payload}, process.env.JWT_SEED, {
            expiresIn: '24h'
        }, (err, token = '') => {
            if(err) {
                console.log(err);
                return reject({
                    error: true,
                    status: 400,
                    msg: 'No se pudo generar el token'}
                );
            }
            resolve(token);
        });
    });
}

const validateToken = (token) => {
    const result = jwt.verify(token, process.env.JWT_SEED);
    if(result) {
        return result
    }
    return {
        error: true,
        msg: 'Token no válido',
        status: 400
    };
}

module.exports = {
    generateJWT,
    validateToken
}