const { Income } = require("../models");

const getIncome = async ({ id }) => {
    const income = await Income.findByPk(id);
    if(!income) {
        return {
            error: true,
            msg: 'No se logró encontrar ningun Ingreso',
            status: 500
        };
    }
    return income.dataValues;

}

const getIncomes = async ({ id_cash_flow }) => {
    const incomes = await Income.findAll({
        where: {
            id_cash_flow
        }
    });
    if(!incomes) {
        return {
            error: true,
            msg: 'No se logró encontrar ningun ingreso',
            status: 500
        };
    }
    return incomes;

}

const newIncome = async ({ concept, amount, id_cash_flow }) => {
    try {
        const income = await Income.create({
            concept, amount, id_cash_flow
        });
        if(!income) {
            return {
                error: true,
                msg: 'No se logró crear el nuevo ingreso',
                status: 500
            };
        }
        await income.save();
        return income;
    } catch (err) {
        console.log(err);
        throw new Error(err);
    }
}

const updateIncome = async ({ id, concept, amount }) => {
    try {
        const income = await Income.findByPk(id);
        if(!income) {
            return {
                error: true,
                msg: 'Ingreso no encontrado',
                status: 400
            };
        }
        await income.update({ concept, amount });
        
        return income;
    } catch (err) {
        console.log(err);
        throw new Error(err);
    }
}

const deleteIncome = async ({ id }) => {
    try {
        const income = await Income.findByPk(id);
        if(!income) {
            return {
                error: true,
                msg: 'Ingreso no encontrado',
                status: 400
            };
        }
        await income.destroy();
        
        return income;
    } catch (err) {
        console.log(err);
        throw new Error(err);
    }
}


module.exports = {
    getIncome,
    getIncomes,
    newIncome,
    updateIncome,
    deleteIncome
}