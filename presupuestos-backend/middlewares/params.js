const Joi = require("joi")


const { paramsDTOS } = require('../dto');


const checkId = async (req, res, next) => {
    try{
        await Joi.attempt(req.params, paramsDTOS.idDTO);
        return next();
    } catch(error) {
        return res.status(500).json({ error: error.message })
    }
}


module.exports = {
    checkId
}