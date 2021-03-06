import express from 'express';
import 'dotenv/config';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import joiErrors from './middlewares/joiErrors';
import * as routes from './routes';

const app = express();
const { NODE_ENV, API_VERSION = 'v1' } = process.env;
const routePrefix = `/api/${API_VERSION}`;

app.use(helmet());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
app.use(morgan('dev'));

app.use(`${routePrefix}/auth`, routes.auth);
app.use(`${routePrefix}/users`, routes.users);
app.use(`${routePrefix}/posts`, routes.posts);

app.get('*', (req, res) => {
  res.send('<h1>Welcome to LIT Blog API</h1>');
});

// Apply Celebrate middleware to handle joi errors
app.use(joiErrors());

// catch 404 and forward to error handler
app.use((req, res, next) => {
  if (NODE_ENV === 'production') {
    res.status(404).send('Not found');
  }
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});

export default app;
