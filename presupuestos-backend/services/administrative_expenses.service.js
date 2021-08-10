const { Administrative_Expense } = require("../models");


const getAdministrativeExpense = async ({ id }) => {
    const administrativeExpense = await Administrative_Expense.findByPk(id);
    if(!administrativeExpense) {
        return {
            error: true,
            msg: 'No se logró encontrar ningun costo directo',
            status: 500
        };
    }
    return administrativeExpense.dataValues;

}

const getAdministrativeExpenses = async ({ id_cash_flow }) => {
    const administrativeExpenses = await Administrative_Expense.findAll({
        where: {
            id_cash_flow
        }
    });
    if(!administrativeExpenses) {
        return {
            error: true,
            msg: 'No se logró encontrar ningún gasto administrativo',
            status: 500
        };
    }
    return administrativeExpenses;

}

const newAdministrativeExpense = async ({ concept, amount, id_cash_flow }) => {
    try {
        const administrativeExpense = await Administrative_Expense.create({
            concept, amount, id_cash_flow
        });
        if(!administrativeExpense) {
            return {
                error: true,
                msg: 'No se logró crear el nuevo gasto administrativo',
                status: 500
            };
        }
        await administrativeExpense.save();
        return administrativeExpense;
    } catch (err) {
        console.log(err);
        throw new Error(err);
    }
}

const updateAdministrativeExpense = async ({ id, concept, amount }) => {
    try {
        const administrativeExpense = await Administrative_Expense.findByPk(id);
        if(!administrativeExpense) {
            return {
                error: true,
                msg: 'Gasto administrativo no encontrado',
                status: 400
            };
        }
        await administrativeExpense.update({ concept, amount });
        
        return administrativeExpense;
    } catch (err) {
        console.log(err);
        throw new Error(err);
    }
}

const deleteAdministrativeExpense = async ({ id }) => {
    try {
        const administrativeExpense = await Administrative_Expense.findByPk(id);
        if(!administrativeExpense) {
            return {
                error: true,
                msg: 'Gasto administativo no encontrado',
                status: 400
            };
        }
        await administrativeExpense.destroy();
        
        return administrativeExpense;
    } catch (err) {
        console.log(err);
        throw new Error(err);
    }
}


module.exports = {
    getAdministrativeExpense,
    getAdministrativeExpenses,
    newAdministrativeExpense,
    updateAdministrativeExpense,
    deleteAdministrativeExpense
}