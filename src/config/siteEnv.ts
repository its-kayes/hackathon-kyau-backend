import dotenv from 'dotenv';

type SiteEnvTypes = {
  PORT: number;
  MONGO_URI: string;
  JWT_SECRET: string;
  JWT_EXPIRES_IN: string;
  FRONTEND_BASE_URL: string;
  NODE_ENV: string;
  SMTP_HOST: string;
  SMTP_PORT: number;
  SMTP_USER: string;
  SMTP_PASS: string;
  AWS_BUCKET_NAME: string;
  AWS_ACCESS_KEY_ID: string;
  AWS_BUCKET_REGION: string;
  AWS_SECRET_ACCESS_KEY: string;
};

dotenv.config();

const {
  PORT,
  MONGO_URI,
  JWT_SECRET,
  JWT_EXPIRES_IN,
  FRONTEND_BASE_URL,
  NODE_ENV,
  SMTP_HOST,
  SMTP_PORT,
  SMTP_USER,
  SMTP_PASS,
  AWS_BUCKET_NAME,
  AWS_ACCESS_KEY_ID,
  AWS_SECRET_ACCESS_KEY,
  AWS_BUCKET_REGION,
} = process.env as unknown as SiteEnvTypes;
export {
  AWS_ACCESS_KEY_ID,
  AWS_BUCKET_NAME,
  AWS_BUCKET_REGION,
  AWS_SECRET_ACCESS_KEY,
  FRONTEND_BASE_URL,
  JWT_EXPIRES_IN,
  JWT_SECRET,
  MONGO_URI,
  NODE_ENV,
  PORT,
  SMTP_HOST,
  SMTP_PASS,
  SMTP_PORT,
  SMTP_USER,
};
