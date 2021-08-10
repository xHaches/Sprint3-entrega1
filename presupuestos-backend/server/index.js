const express = require('express');
const cors = require('cors');
const sequelize = require('../database/connection');
const { authRoutes,
    proyectRoutes, 
    cashFlowRoutes, 
    incomeRoutes, 
    administrativeExpenseRoutes,
    directCostRoutes,
    resourceRoutes,
    budgetRoutes
} = require('../routes');


class Server {

    #app;
    #port;
    #host;
    #apiPaths = {
        auth: '/api/auth',
        budgets: '/api/budgets',
        proyects: '/api/proyects',
        cash_flows: '/api/cash-flows',
        incomes: '/api/incomes',
        administrative_expenses: '/api/administrative-expenses',
        direct_costs: '/api/direct-costs',
        resources: '/api/resources'
    }

    constructor() {
        this.#app = express();
        this.#port = process.env.PORT;
        this.#host = process.env.HOST;

        this.dbConnection();
        this.middlewares();
        this.routes();

    }

    listen() {
        this.#app.listen(this.#port, () => {
            console.log(`Escuchando en http://${this.#host}:${this.#port}`);
        });
    }

    async dbConnection() {
        try {
            await sequelize.authenticate();
            require('../database/associations');
            console.log('Base de datos conectada');
        }catch(err){
            throw new Error(err);
        }
    }

    middlewares() {
        this.#app.use(express.json());
        this.#app.use(express.urlencoded({extended: true}));
        this.#app.use(cors());
    }

    routes() {
        this.#app.use(this.#apiPaths.auth, authRoutes);
        this.#app.use(this.#apiPaths.proyects, proyectRoutes);
        this.#app.use(this.#apiPaths.cash_flows, cashFlowRoutes);
        this.#app.use(this.#apiPaths.incomes, incomeRoutes);
        this.#app.use(this.#apiPaths.administrative_expenses, administrativeExpenseRoutes);
        this.#app.use(this.#apiPaths.direct_costs, directCostRoutes);
        this.#app.use(this.#apiPaths.resources, resourceRoutes);
        this.#app.use(this.#apiPaths.budgets, budgetRoutes);
    }

}

module.exports = Server