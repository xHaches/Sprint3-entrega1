const { budgetService } = require("../services");

class BudgetController {

    async getBudgets(req, res) {
        const { id: id_user } = req.params;

        try {
            const response = await budgetService.getBudgets({ id_user });
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
}


module.exports = BudgetController;