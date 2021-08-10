const { DataTypes, Deferrable } = require('sequelize');
const sequelize = require('../database/connection');

const Proyect = require('./proyect');

const Cash_Flow = sequelize.define('Cash_Flows', {
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
    },
    month: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    id_proyect: {
        type: DataTypes.INTEGER,
        references: {
            model: Proyect,
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

module.exports = Cash_Flow;