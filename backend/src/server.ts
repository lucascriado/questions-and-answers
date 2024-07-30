import express from 'express';
import routes from './routes';
import sequelize from './config/database';
import { verifyToken } from './middlewares/verifyToken';

const app = express();
const port = 3000;

app.use(express.json());

// Use the verifyToken middleware on protected routes
app.use('/api', verifyToken, routes);

sequelize.sync().then(() => {
  console.log('Database synced');
  app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
  });
});
