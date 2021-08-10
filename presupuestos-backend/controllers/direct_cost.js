const { directCostService } = require("../services");

class DirectCostController {


    async getDirectCost(req, res) {
        const { id } = req.params;
        try {
            const response = await directCostService.getDirectCost({ id });
            if(response.error){
                return res.status(response.status).json({msg: response.msg});
            }
            const { ...income } = response;
            return res.json(income)
        } catch (err) {
            console.log(err);
            return res.status(500).json({
                msg: 'Hable con el administrador'
            })
        }
    }

    async getDirectCosts(req, res) {
        const { id: id_cash_flow } = req.params;

        try {
            const response = await directCostService.getDirectCosts({ id_cash_flow });
            if(response.error){
                return res.status(response.status).json({msg: response.msg});
            }
            const [ ...directCosts ] = response;
            return res.json(directCosts)
        } catch (err) {
            console.log(err);
            return res.status(500).json({
                msg: 'Hable con el administrador'
            })
        }
    }

    async createDirectCost(req, res) {
        const { concept, amount, id_cash_flow } = req.body;
        try {
            const response = await directCostService.newDirectCost({ concept, amount, id_cash_flow });
            if(response.error){
                return res.status(response.status).json({msg: response.msg});
            }
            const {...directCost } = response;
            return res.json({...directCost.dataValues })
        } catch (err) {
            console.log(err);
            return res.status(500).json({
                msg: 'Hable con el administrador'
            })
        }
    }

    async updateDirectCost(req, res) {

        const { concept, amount } = req.body;
        const { id } = req.params;

        try {
            const response = await directCostService.updateDirectCost({ concept, amount, id });
            if(response.error){
                return res.status(response.status).json({msg: response.msg});
            }
            const {...directCost } = response;
            return res.json({...directCost.dataValues })
        } catch (err) {
            console.log(err);
            return res.status(500).json({
                msg: 'Hable con el administrador'
            })
        }
    }


    async deleteDirectCost (req, res) {
        const { id } = req.params;

        try {
            const response = await directCostService.deleteDirectCost({ id });
            if(response.error){
                return res.status(response.status).json({msg: response.msg});
            }
            const {...directCost } = response;
            return res.json({...directCost.dataValues })
        } catch (err) {
            console.log(err);
            return res.status(500).json({
                msg: 'Hable con el administrador'
            })
        }
    }
}


module.exports = DirectCostController;