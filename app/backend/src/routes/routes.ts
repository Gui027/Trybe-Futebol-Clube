import { Router } from 'express';

import loginMiddlewares from '../middlewares/loginMiddlewares';
import postLoginController from '../controllers/postLoginController';
import getTeamsController from '../controllers/getTeamsController';
import getByIdTeamsController from '../controllers/getByIdTeamsController';
import getMatchesController from '../controllers/getMatchesController';
import postMatchesController from '../controllers/postMatchesController';
import roleMiddlewares from '../middlewares/roleMiddlewares';
import patchMatchesController from '../controllers/patchMatchesController';

const routes = Router();

routes.post('/login', loginMiddlewares.loginValidation, postLoginController.loginController);

routes.get('/login/validate', roleMiddlewares.authTokenRole);

routes.get('/teams', getTeamsController.getTeamsController);

routes.get('/teams/:id', getByIdTeamsController.getByIdTeam);

routes.get('/matches', getMatchesController.getMatchesController);

routes.post('/matches', postMatchesController.postMatchesController);

routes.patch('/matches/:id/finish', patchMatchesController.patchMatchesController);

export default routes;
