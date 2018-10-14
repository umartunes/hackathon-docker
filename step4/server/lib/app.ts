import express = require('express')
import bodyParser = require('body-parser')
import { Request, Response } from "express"

//Importing Routes
import { todosRouter } from './routes/routes-todos'

//Importing MiddleWares
import responseTemplate from './middlewares/response-template'

//TypeScript class
class App {

    public server: express.Application;

    public todoRoute: todosRouter = new todosRouter();

    constructor() {
        this.server = express();
        this.configuration();
        //DB Connection
        require('./config/db-config')
    }

    private configuration(): void {
        //Use Custom Middleware to get response template in all api routes
        this.server.use(responseTemplate);

        this.server.use(bodyParser.urlencoded({ extended: true }));
        this.server.use(bodyParser.json());

        //Handling CORS requests
        this.server.use((req: Request, res: Response, next) => {
            res.header("Access-Control-Allow-Origin", "https://dockerclient.herokuapp.com");
            res.header("Access-Control-Allow-Credentials", "true");
            res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
            res.header("Access-Control-Allow-Headers", "Content-Type");
            next();
        });

        //Static Files
        this.server.use(express.static('./build'))

        //setting routes
        this.todoRoute.routes(this.server);

        //Error Control
        this.server.use(function (err, req, res, next) {
            console.error(err);
            res.status(500).send('Something broke!');
        })
    }
}


export default new App().server

