
const Joi = require("joi");



const idDTO = Joi.object().keys({
    id: Joi.number().integer().positive().required()
});

module.exports = {
    idDTO
}