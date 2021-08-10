const { DataTypes, Deferrable } = require('sequelize');
const sequelize = require('../database/connection');

const User = require("./user");
const Proyect = require('./proyect');

const Budget = sequelize.define('Budgets', {
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
    },
    uuid: {
        type: DataTypes.STRING(50),
        unique: true,
        allowNull: false
    },
    date: {
        type: DataTypes.DATE,
        allowNull: false
    },
    id_proyect: {
        type: DataTypes.INTEGER,
        references: {
            model: Proyect,
            key: 'id',
            deferrable: Deferrable.INITIALLY_IMMEDIATE
        }
    },
    id_user: {
        type: DataTypes.INTEGER,
        references: {
            model: User,
            key: 'id',
            deferrable: Deferrable.INITIALLY_IMMEDIATE
        }
    }
},
{
    timestamps: false,
    createdAt: false,
    updatedAt: false
});

module.exports = Budget;