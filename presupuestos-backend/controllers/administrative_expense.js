const { administrativeExpenseService } = require("../services");

class AdministativeExpenseController {


    async getAdministrativeExpense(req, res) {
        const { id } = req.params;
        try {
            const response = await administrativeExpenseService.getAdministrativeExpense({ id });
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

    async getAdministrativeExpenses(req, res) {
        const { id: id_cash_flow } = req.params;

        try {
            const response = await administrativeExpenseService.getAdministrativeExpenses({ id_cash_flow });
            if(response.error){
                return res.status(response.status).json({msg: response.msg});
            }
            const [ ...administrativeExpenses ] = response;
            return res.json(administrativeExpenses)
        } catch (err) {
            console.log(err);
            return res.status(500).json({
                msg: 'Hable con el administrador'
            })
        }
    }

    async createAdministrativeExpense(req, res) {
        const { concept, amount, id_cash_flow } = req.body;
        try {
            const response = await administrativeExpenseService.newAdministrativeExpense({ concept, amount, id_cash_flow });
            if(response.error){
                return res.status(response.status).json({msg: response.msg});
            }
            const {...administrativeExpense } = response;
            return res.json({...administrativeExpense.dataValues })
        } catch (err) {
            console.log(err);
            return res.status(500).json({
                msg: 'Hable con el administrador'
            })
        }
    }

    async updateAdministrativeExpense(req, res) {

        const { concept, amount } = req.body;
        const { id } = req.params;

        try {
            const response = await administrativeExpenseService.updateAdministrativeExpense({ concept, amount, id });
            if(response.error){
                return res.status(response.status).json({msg: response.msg});
            }
            const {...administrativeExpense } = response;
            return res.json({...administrativeExpense.dataValues })
        } catch (err) {
            console.log(err);
            return res.status(500).json({
                msg: 'Hable con el administrador'
            })
        }
    }


    async deleteAdministrativeExpense (req, res) {
        const { id } = req.params;

        try {
            const response = await administrativeExpenseService.deleteAdministrativeExpense({ id });
            if(response.error){
                return res.status(response.status).json({msg: response.msg});
            }
            const {...administrativeExpense } = response;
            return res.json({...administrativeExpense.dataValues })
        } catch (err) {
            console.log(err);
            return res.status(500).json({
                msg: 'Hable con el administrador'
            })
        }
    }
}


module.exports = AdministativeExpenseController;