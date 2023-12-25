import * as dotenv from 'dotenv';
import { DataSource, DataSourceOptions } from 'typeorm';

dotenv.config();

const isProd = process.env['NODE_ENV'] === 'production';

export const dataSourceOptions: DataSourceOptions = {
  type: 'postgres',
  host: process.env['DB_HOST'],
  username: process.env['DB_USER'],
  database: process.env['DB_NAME'],
  password: process.env['DB_PASSWORD'],
  port: parseInt(process.env['DB_PORT']) || 5432,
  migrationsRun: !isProd,
  synchronize: !isProd,
  logging: !isProd,
  relationLoadStrategy: 'query',
  entities: [],
  migrations: [],
  subscribers: [],
};

export const dataSource = new DataSource(dataSourceOptions);
