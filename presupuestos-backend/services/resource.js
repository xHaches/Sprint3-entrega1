const { Resource } = require("../models");


const getResources = async ({ id_proyect }) => {
    const incomes = await Resource.findAll({
        where: {
            id_proyect
        }
    });
    if(!incomes) {
        return {
            error: true,
            msg: 'No se logró encontrar ningun recurso',
            status: 404
        };
    }
    return incomes;

}

const newResource = async ({ title, monthly_cost, id_proyect }) => {
    try {
        const resource = await Resource.create({
            title, monthly_cost, id_proyect
        });
        if(!resource) {
            return {
                error: true,
                msg: 'No se logró crear el nuevo recurso',
                status: 404
            };
        }
        await resource.save();
        return resource;
    } catch (err) {
        console.log(err);
        throw new Error(err);
    }
}

const updateResource = async ({ id, title, monthly_cost }) => {
    try {
        const resource = await Resource.findByPk(id);
        if(!resource) {
            return {
                error: true,
                msg: 'Recurso no encontrado',
                status: 400
            };
        }
        await resource.update({ title, monthly_cost });
        
        return resource;
    } catch (err) {
        console.log(err);
        throw new Error(err);
    }
}

const deleteResource = async ({ id }) => {
    try {
        const resource = await Resource.findByPk(id);
        if(!resource) {
            return {
                error: true,
                msg: 'Recurso no encontrado',
                status: 400
            };
        }
        await resource.destroy();
        
        return resource;
    } catch (err) {
        console.log(err);
        throw new Error(err);
    }
}


module.exports = {
    getResources,
    newResource,
    updateResource,
    deleteResource
}