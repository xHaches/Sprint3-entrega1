const { DataTypes } = require('sequelize');
const sequelize = require('../database/connection');

const Proyect = sequelize.define('Proyects', {
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
    },
    version: {
        type: DataTypes.STRING(20),
        is: /^(?:(0\\.|([1-9]+\\d*)\\.))+(?:(0\\.|([1-9]+\\d*)\\.))+((0|([1-9]+\\d*)))$/,
        allowNull: false
    },
    months: {
        type: DataTypes.INTEGER,
        defaultValue: 0,
        allowNull: false
    },
    title: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
},
{
    timestamps: false,
    createdAt: false,
    updatedAt: false
});

module.exports = Proyect;