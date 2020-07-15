import { Router } from 'express';

const routes = new Router();

routes.get('/', (_, res) => {
  return res.json({ message: 'Hello Myself' });
});

export default routes;
