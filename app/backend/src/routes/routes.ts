import { Router } from 'express';

import loginMiddlewares from '../middlewares/loginMiddlewares';
import postLoginController from '../controllers/postLoginController';
import tokenMiddlewares from '../middlewares/tokenMiddlewares';
import getTeamsController from '../controllers/getTeamsController';
import getByIdTeamsController from '../controllers/getByIdTeamsController';
import getMatchesController from '../controllers/getMatchesController';

const routes = Router();

routes.post('/login', loginMiddlewares.loginValidation, postLoginController.loginController);

routes.get('/login/validate', tokenMiddlewares.authToken);

routes.get('/teams', getTeamsController.getTeamsController);

routes.get('/teams/:id', getByIdTeamsController.getByIdTeam);

routes.get('/matches', getMatchesController.getMatchesController);

export default routes;
