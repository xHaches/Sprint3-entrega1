const Joi = require("joi")


const { cashFlowDTOS } = require('../dto');

const checkCashFlow = async (req, res, next) => {
    try{
        await Joi.attempt(req.body, cashFlowDTOS.cashFlowDTO);
        return next();
    } catch(error) {
        return res.status(500).json({ error: error.message })
    }
}

module.exports = {
    checkCashFlow
}