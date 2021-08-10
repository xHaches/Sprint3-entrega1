const { cashFlowService } = require("../services");

class CashFlowController {

    async getCashFlows(req, res) {
        const { id: id_proyect } = req.params;
        try {
            const response = await cashFlowService.getCashFlows({ id_proyect });
            if(response.error){
                return res.status(response.status).json({msg: response.msg});
            }
            const [ ...proyect ] = response;
            return res.json(proyect)
        } catch (err) {
            console.log(err);
            return res.status(500).json({
                msg: 'Hable con el administrador'
            })
        }
    }

    async createCashFlow(req, res) {
        const { month, id_proyect } = req.body;
        try {
            const response = await cashFlowService.newCashFlow({ month, id_proyect });
            if(response.error){
                return res.status(response.status).json({msg: response.msg});
            }
            const {...cash_flow } = response;
            return res.json({...cash_flow.dataValues })
        } catch (err) {
            console.log(err);
            return res.status(500).json({
                msg: 'Hable con el administrador'
            })
        }
    }
}


module.exports = CashFlowController;