import { Router } from 'express';

// import Users from './app/models/Users';

import authMiddleware from './app/Middlewares/auth';

import SessionsController from './app/controller/SessionsController';
import StudentsController from './app/controller/StudentsController';

const routes = new Router();

routes.post('/sessions', SessionsController.store);

routes.use(authMiddleware);

routes.post('/students', StudentsController.store);
routes.put('/students', StudentsController.update);

export default routes;
