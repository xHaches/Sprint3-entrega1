const { DataTypes, Deferrable } = require('sequelize');
const sequelize = require('../database/connection');

const Proyect = require('./proyect');

const Resource = sequelize.define('Resources', {
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
    },
    title: {
        type: DataTypes.STRING(100),
        allowNull: false
    },
    monthly_cost: {
        type: DataTypes.NUMBER,
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

module.exports = Resource;