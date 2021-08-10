const Joi = require("joi");


const cashFlowDTO = Joi.object().keys({
    month: Joi.number().integer().required(),
    id_proyect: Joi.number().integer().required(),
});

module.exports = { cashFlowDTO };