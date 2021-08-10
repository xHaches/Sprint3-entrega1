const Joi = require("joi");


const resourceDTO = Joi.object().keys({
    title: Joi.string().min(6).max(100).required(),
    monthly_cost: Joi.number().positive().required(),
    id_proyect: Joi.number().integer().required(),
});

const putResourceDTO = Joi.object().keys({
    title: Joi.string().min(6).max(100).required(),
    monthly_cost: Joi.number().positive().required(),
});

module.exports = {resourceDTO, putResourceDTO};