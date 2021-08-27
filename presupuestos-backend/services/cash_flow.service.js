const { Cash_Flow } = require("../models");

const getCashFlows = async ({ id_proyect }) => {
    const cashFlows = await Cash_Flow.findAll({
        where: {
            id_proyect
        }
    });
    if(!cashFlows) {
        return {
            error: true,
            msg: 'No se logró encontrar ningun ingreso',
            status: 404
        };
    }
    return cashFlows;
}

const newCashFlow = async ({ month, id_proyect }) => {
    try {
        const cashFlow = await Cash_Flow.create({
            month, id_proyect
        });
        if(!cashFlow) {
            return {
                error: true,
                msg: 'No se logró crear el flujo de efectivo',
                status: 404
            };
        }
        await cashFlow.save();
        return cashFlow;
    } catch (err) {
        console.log(err);
        throw new Error(err);
    }
}

module.exports = {
    newCashFlow,
    getCashFlows
}