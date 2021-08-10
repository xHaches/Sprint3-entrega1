const Joi = require("joi")


const { loginDTO } = require('../dto');

const checkEmailAndPassword = async (req, res, next) => {
    try{
        await Joi.attempt(req.body, loginDTO);
        return next();
    } catch(error) {
        return res.status(500).json({ error: error.message })
    }
}

module.exports = {
    checkEmailAndPassword
}