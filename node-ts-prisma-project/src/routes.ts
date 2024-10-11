import {Router} from 'express';
import {getUserController, alterUserController, createUserController} from './controllers/UserController';
import { createTipoAtivoController } from './controllers/tipoAtivoController';

const routes = Router();

routes.get('/usuarios/:userId',getUserController);
routes.post('/usuarios/create',createUserController);
routes.put('/usuarios/alter',alterUserController);
routes.post('/tipo_ativo/create',createTipoAtivoController);
routes.post('/ativo/create',createAtivoController);

export {routes};