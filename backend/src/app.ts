import express, { Request, Response } from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import router from './app/routes';
import notFound from './app/middlewares/notFound';
import globalErrorHandler from './app/middlewares/globalErrorHandler';

const app = express();

// Middleware setup
app.use(express.json());
app.use(cors());

app.use(bodyParser.json());

// Route handlers
app.use('/api/v1', router);

// Root endpoint
app.get('/', (req: Request, res: Response) => {
  res.send('Welcome to TaskManagement backend server!');
});

app.use(notFound);
app.use(globalErrorHandler);

export default app;
