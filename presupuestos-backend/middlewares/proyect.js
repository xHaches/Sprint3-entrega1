const Joi = require("joi")


const { proyectDTOS } = require('../dto');

const checkProyect = async (req, res, next) => {
    try{
        await Joi.attempt(req.body, proyectDTOS.proyectDTO);
        return next();
    } catch(error) {
        return res.status(500).json({ error: error.message })
    }
}

const checkPutProyect = async (req, res, next) => {
    try{
        await Joi.attempt(req.body, proyectDTOS.putProyectDTO);
        return next();
    } catch(error) {
        return res.status(500).json({ error: error.message })
    }
}

module.exports = {
    checkProyect, checkPutProyect
}