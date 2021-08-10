const { incomeService } = require("../services");

class IncomeController {

    async getIncome(req, res) {
        const { id } = req.params;
        try {
            const response = await incomeService.getIncome({ id });
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


    async getIncomes(req, res) {
        const { id: id_cash_flow } = req.params;

        try {
            const response = await incomeService.getIncomes({ id_cash_flow });
            if(response.error){
                return res.status(response.status).json({msg: response.msg});
            }
            const [ ...incomes ] = response;
            return res.json(incomes)
        } catch (err) {
            console.log(err);
            return res.status(500).json({
                msg: 'Hable con el administrador'
            })
        }
    }

    async createIncome(req, res) {
        const { concept, amount, id_cash_flow } = req.body;
        try {
            const response = await incomeService.newIncome({ concept, amount, id_cash_flow });
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

    async updateIncome(req, res) {

        const { concept, amount } = req.body;
        const { id } = req.params;

        try {
            const response = await incomeService.updateIncome({ concept, amount, id });
            if(response.error){
                return res.status(response.status).json({msg: response.msg});
            }
            const {...income } = response;
            return res.json({...income.dataValues })
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
            const response = await incomeService.deleteIncome({ id });
            if(response.error){
                return res.status(response.status).json({msg: response.msg});
            }
            const {...income } = response;
            return res.json({...income.dataValues })
        } catch (err) {
            console.log(err);
            return res.status(500).json({
                msg: 'Hable con el administrador'
            })
        }
    }
}


module.exports = IncomeController;