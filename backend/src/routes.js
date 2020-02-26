import { Router } from 'express';

const routes = new Router();

routes.get('/', (req, res) => { return res.json({ Error: 'Token is not Provided' }) });

export default routes;
