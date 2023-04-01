import * as dotenv from 'dotenv';
import { Config } from './types/config.types';

dotenv.config();

export const config: Config = {
  port: 8089,
  dbUrl: process.env.MONGODB_CONNECTION,
};
