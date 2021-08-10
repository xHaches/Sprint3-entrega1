const { Direct_Cost } = require("../models");

const getDirectCost = async ({ id }) => {
    const directCost = await Direct_Cost.findByPk(id);
    if(!directCost) {
        return {
            error: true,
            msg: 'No se logró encontrar ningun costo directo',
            status: 500
        };
    }
    return directCost.dataValues;

}

const getDirectCosts = async ({ id_cash_flow }) => {
    const directCosts = await Direct_Cost.findAll({
        where: {
            id_cash_flow
        }
    });
    if(!directCosts) {
        return {
            error: true,
            msg: 'No se logró encontrar ningun costo directo',
            status: 500
        };
    }
    return directCosts;

}

const newDirectCost = async ({ concept, amount, id_cash_flow }) => {
    try {
        const directCost = await Direct_Cost.create({
            concept, amount, id_cash_flow
        });
        if(!directCost) {
            return {
                error: true,
                msg: 'No se logró crear el costo directo',
                status: 500
            };
        }
        await directCost.save();
        return directCost;
    } catch (err) {
        console.log(err);
        throw new Error(err);
    }
}

const updateDirectCost = async ({ id, concept, amount }) => {
    try {
        const directCost = await Direct_Cost.findByPk(id);
        if(!directCost) {
            return {
                error: true,
                msg: 'Costo directo no encontrado',
                status: 400
            };
        }
        await directCost.update({ concept, amount });
        
        return directCost;
    } catch (err) {
        console.log(err);
        throw new Error(err);
    }
}

const deleteDirectCost = async ({ id }) => {
    try {
        const directCost = await Direct_Cost.findByPk(id);
        if(!directCost) {
            return {
                error: true,
                msg: 'Costo directo no encontrado',
                status: 400
            };
        }
        await directCost.destroy();
        
        return directCost;
    } catch (err) {
        console.log(err);
        throw new Error(err);
    }
}


module.exports = {
    getDirectCost,
    getDirectCosts,
    newDirectCost,
    updateDirectCost,
    deleteDirectCost
}