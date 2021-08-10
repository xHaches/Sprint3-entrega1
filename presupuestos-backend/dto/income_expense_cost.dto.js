const Joi = require("joi");


const incomeOrAdministrativeExpesneOrDirectCostDTO = Joi.object().keys({
    concept: Joi.string().required(),
    amount: Joi.number().positive().required(),
    id_cash_flow: Joi.number().integer().positive().required(),
});

const putIncomeOrAdministrativeExpesneOrDirectCostDTO = Joi.object().keys({
    concept: Joi.string().required(),
    amount: Joi.number().positive().required(),
});



module.exports = {incomeOrAdministrativeExpesneOrDirectCostDTO,putIncomeOrAdministrativeExpesneOrDirectCostDTO};