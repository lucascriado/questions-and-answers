import { Sequelize } from 'sequelize';

const sequelize = new Sequelize('cars', 'admin', 'Password1!', {
  host: 'localhost',
  dialect: 'mysql'
});

export default sequelize;
