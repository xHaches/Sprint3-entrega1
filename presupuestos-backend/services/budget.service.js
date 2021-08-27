const { Budget, Proyect } = require("../models");

const sequelize = require('sequelize');
const { v4: uuidv4 } = require('uuid');

const newBudget = async ({ id_user, date, id_proyect }) => {
    try {
        const budget = await Budget.create({
            id_user, date, id_proyect, uuid: uuidv4()
        });
        await budget.save();
        return budget;
    } catch (err) {
        console.log(err);
        throw new Error(err);
    }
}

const getBudgets = async ({ id_user }) => {
    const budgets = await Budget.findAll({
        where: {
            id_user
        }
    });
    if(!budgets) {
        return {
            error: true,
            msg: 'No se logró encontrar ningun ingreso',
            status: 404
        };
    }
    return budgets;
}

module.exports = {
    newBudget,
    getBudgets
}