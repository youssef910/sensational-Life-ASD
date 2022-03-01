import express from 'express';
import morgan from 'morgan';
import path from 'path';
import router from './api/index.js';
import cors from 'cors';

import bodyParser from 'body-parser';

const __filename = fileURLToPath(import.meta.url);
import passport from 'passport';

import {
  configuredHelmet,
  permissionsPolicy,
  httpsOnly,
  logErrors,
  pushStateRouting,
} from './middleware.js';
import { fileURLToPath } from 'url';


const apiRoot = '/api';
const __dirname = path.dirname(__filename);
const staticDir = path.join(__dirname, 'static');

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(express.json());
app.use(configuredHelmet());
app.use(permissionsPolicy());
app.use(morgan('dev'));

if (app.get('env') === 'production') {
  app.enable('trust proxy');
  app.use(httpsOnly());
}

app.use(apiRoot, router);

app.use(express.static(staticDir));
app.use(pushStateRouting(apiRoot, staticDir));

app.use(logErrors());

export default app;
