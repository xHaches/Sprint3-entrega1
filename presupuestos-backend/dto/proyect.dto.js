const Joi = require("joi");


const proyectDTO = Joi.object().keys({
    version: Joi.string().required(),
    months: Joi.number().integer().required(),
    id_user: Joi.number().integer().required(),
    date: Joi.date().required(),
    title: Joi.string().min(6).max(50).required()
});

const putProyectDTO = Joi.object().keys({
    id: Joi.number().integer().required(),
    version: Joi.string().required(),
    months: Joi.number().integer().required(),
    title: Joi.string().min(6).max(50).required()
});

module.exports = {proyectDTO, putProyectDTO};