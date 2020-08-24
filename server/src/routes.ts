import express from 'express';
import ClassesController from './controllers/ClassesControllers';
import ConnectionsController from './controllers/ConnectionsController';

const routes = express.Router();
const classesControlles = new ClassesController();
const connectionsController = new ConnectionsController();

routes.get('/classes', classesControlles.index);
routes.post('/classes', classesControlles.create);

routes.get('/connections', connectionsController.index);
routes.post('/connections', connectionsController.create);

export default routes;
