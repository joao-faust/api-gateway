import { config } from 'dotenv';
config();

export const NODE_ENV = process.env.NODE_ENV || 'development';
export const APP_PORT = process.env.APP_PORT || 10000;

export function isDev() {
  return NODE_ENV === 'development';
}
