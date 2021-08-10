const { DataTypes } = require('sequelize');
const sequelize = require('../database/connection');

const User = sequelize.define('Users', {
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
    },
    email: {
        type: DataTypes.STRING(50),
        unique: true,
        allowNull: false
    },
    password: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
    status: {
        type: DataTypes.SMALLINT,
        default: 1,
        allowNull: false
    }
},
{
    timestamps: false,
    createdAt: false,
    updatedAt: false
});

module.exports = User;