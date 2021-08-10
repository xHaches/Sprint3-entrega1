const { proyectService } = require("../services");




class ProyectController {

    async getProyect(req, res) {
        const { id } = req.params;
        try {
            const response = await proyectService.getProyect({ id });
            if(response.error){
                return res.status(response.status).json({msg: response.msg});
            }
            const { ...proyect } = response;
            return res.json(proyect)
        } catch (err) {
            console.log(err);
            return res.status(500).json({
                msg: 'Hable con el administrador'
            })
        }
    }

    async createProyect(req, res) {
        const { version, months, id_user, date, title } = req.body;
        try {
            const response = await proyectService.newProyect({ version, months, id_user, date,title });
            if(response.error){
                return res.status(response.status).json({msg: response.msg});
            }
            const {...proyect } = response;
            return res.json({...proyect.dataValues })
        } catch (err) {
            console.log(err);
            return res.status(500).json({
                msg: 'Hable con el administrador'
            })
        }
    }

    async updateProyect(req, res) {
        const { id, version, months, title } = req.body;
        try {
            const response = await proyectService.updateProyect({ id, version, months, title });
            if(response.error){
                return res.status(response.status).json({msg: response.msg});
            }
            const {...proyect } = response;
            return res.json({...proyect.dataValues })
        } catch (err) {
            console.log(err);
            return res.status(500).json({
                msg: 'Hable con el administrador'
            })
        }
    }
}


module.exports = ProyectController;