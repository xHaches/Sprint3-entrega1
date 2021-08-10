const Joi = require("joi")


const { incomeDTOS } = require('../dto');

const checkIncomeOrAdministrativeExpesneOrDirectCost = async (req, res, next) => {
    try{
        await Joi.attempt(req.body, incomeDTOS.incomeOrAdministrativeExpesneOrDirectCostDTO);
        return next();
    } catch(error) {
        return res.status(500).json({ error: error.message })
    }
}

const checkPutIncomeOrAdministrativeExpesneOrDirectCost = async (req, res, next) => {
    try{
        await Joi.attempt(req.body, incomeDTOS.putIncomeOrAdministrativeExpesneOrDirectCostDTO);
        return next();
    } catch(error) {
        return res.status(500).json({ error: error.message })
    }
}


module.exports = {
    checkIncomeOrAdministrativeExpesneOrDirectCost,
    checkPutIncomeOrAdministrativeExpesneOrDirectCost
}