const Joi = require("joi")


const { resourceDTOS } = require('../dto');

const checkProyect = async (req, res, next) => {
    try{
        await Joi.attempt(req.body, resourceDTOS.resourceDTO);
        return next();
    } catch(error) {
        return res.status(500).json({ error: error.message })
    }
}

const checkPutProyect = async (req, res, next) => {
    try{
        await Joi.attempt(req.body, resourceDTOS.putResourceDTO);
        return next();
    } catch(error) {
        return res.status(500).json({ error: error.message })
    }
}

module.exports = {
    checkProyect, checkPutProyect
}