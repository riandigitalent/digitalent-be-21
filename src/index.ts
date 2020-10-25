import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import morgan from 'morgan';

const PORT = process.env.PORT || 3000;

const app = express();

//middlewares
app.use(express.json());
app.use(morgan('dev'));
app.use((err: Error, req: express.Request, res: express.Response, next: express.NextFunction) => {
  res.status(500).json({
    success: false,
    message: err.message
  });
});

//routes
app.get('/', async (req, res, next) => {
  res.json({message: 'success'});
})

app.listen(PORT, () => {
  console.log(`App is listening to port ${PORT}`);
});