import {Router} from 'express';
import {getUserController, alterUserController, createUserController} from './controllers/UserController';

const routes = Router();

routes.get('/usuarios/:userId',getUserController);
routes.post('/usuarios/create',createUserController);
routes.put('/usuarios/alter',alterUserController);
routes.put('/produtos/:id',alterUserController);

export {routes};