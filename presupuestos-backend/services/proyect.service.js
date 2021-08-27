const { Proyect } = require("../models");
const { newBudget } = require("./budget.service");


const getProyect = async ({ id }) => {
    const proyect = await Proyect.findByPk(id);
    if(!proyect) {
        return {
            error: true,
            msg: 'No se logró encontrar ningun proyecto',
            status: 500
        };
    }
    return proyect.dataValues;

}

const newProyect = async ({ version, months, id_user, date, title }) => {
    try {
        const proyect = await Proyect.create({
            version, months, title
        });
        if(!proyect) {
            return {
                error: true,
                msg: 'No se logró crear el nuevo proyecto',
                status: 500
            };
        }
        const budget = await newBudget({ id_user, date, id_proyect: proyect.dataValues.id });
        if(!budget) {
            return {
                error: true,
                msg: 'No se logró crear un nuevo presupuesto',
                status: 500
            };
        }
        await proyect.save();
        return proyect;
    } catch (err) {
        console.log(err);
        throw new Error(err);
    }
}

const updateProyect = async ({ id, version, months, title }) => {
    try {
        const proyect = await Proyect.findByPk(id);
        if(!proyect) {
            return {
                error: true,
                msg: 'Proyecto no encontrado',
                status: 404
            };
        }
        if(months >= proyect.months){
            await proyect.update({ version, months, title });
        }
        
        return proyect;
    } catch (err) {
        console.log(err);
        throw new Error(err);
    }
}

module.exports = {
    newProyect,
    updateProyect,
    getProyect
}