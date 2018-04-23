import express from 'express';
import { RootRoutes } from './root.route';

const app: express.Application = express();

app.use('/', RootRoutes.configure());

app.listen(3320, () => console.log('Started server'));
