const { DataTypes, Deferrable } = require('sequelize');
const sequelize = require('../database/connection');
const Cash_Flow = require('./cash_flow');


const Direct_Cost = sequelize.define('Direct_Costs', {
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
    },
    concept: {
        type: DataTypes.STRING(100),
        allowNull: false
    },
    amount: {
        type: DataTypes.NUMBER,
        allowNull: false
    },
    id_cash_flow: {
        type: DataTypes.INTEGER,
        references: {
            model: Cash_Flow,
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

module.exports = Direct_Cost;