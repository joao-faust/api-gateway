import express from 'express';
import helmet from 'helmet';
import morgan from 'morgan';

import { isDev } from './env';

const app = express();

app.use(morgan(!isDev() ? 'combined' : 'dev'));
app.use(express.json());
app.use(helmet());

export default app;
