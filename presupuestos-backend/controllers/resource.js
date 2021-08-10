const { resourceService } = require("../services");

class ResourceController {


    async getResources(req, res) {
        const { id: id_proyect } = req.params;

        try {
            const response = await resourceService.getResources({ id_proyect });
            if(response.error){
                return res.status(response.status).json({msg: response.msg});
            }
            const [ ...resources ] = response;
            return res.json(resources)
        } catch (err) {
            console.log(err);
            return res.status(500).json({
                msg: 'Hable con el administrador'
            })
        }
    }

    async createResource(req, res) {
        const { title, monthly_cost, id_proyect } = req.body;
        try {
            const response = await resourceService.newResource({ title, monthly_cost, id_proyect });
            if(response.error){
                return res.status(response.status).json({msg: response.msg});
            }
            const {...resource } = response;
            return res.json({...resource.dataValues })
        } catch (err) {
            console.log(err);
            return res.status(500).json({
                msg: 'Hable con el administrador'
            })
        }
    }

    async updateIncome(req, res) {

        const { title, monthly_cost } = req.body;
        const { id } = req.params;

        try {
            const response = await resourceService.updateResource({ title, monthly_cost, id });
            if(response.error){
                return res.status(response.status).json({msg: response.msg});
            }
            const {...resource } = response;
            return res.json({...resource.dataValues })
        } catch (err) {
            console.log(err);
            return res.status(500).json({
                msg: 'Hable con el administrador'
            })
        }
    }


    async deleteIncome (req, res) {
        const { id } = req.params;

        try {
            const response = await resourceService.deleteResource({ id });
            if(response.error){
                return res.status(response.status).json({msg: response.msg});
            }
            const {...resource } = response;
            return res.json({...resource.dataValues })
        } catch (err) {
            console.log(err);
            return res.status(500).json({
                msg: 'Hable con el administrador'
            })
        }
    }
}


module.exports = ResourceController;