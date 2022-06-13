import { Router } from 'express';

import loginMiddlewares from '../middlewares/loginMiddlewares';
import postLoginController from '../controllers/postLoginController';
import tokenMiddlewares from '../middlewares/tokenMiddlewares';

const routes = Router();

routes.post('/login', loginMiddlewares.loginValidation, postLoginController.loginController);

routes.get('/login/validate', tokenMiddlewares.authToken);

export default routes;
