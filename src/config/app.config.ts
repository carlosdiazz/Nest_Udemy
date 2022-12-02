import * as Joi from 'joi';
import { registerAs } from '@nestjs/config';

export const enviroments = {
  dev: '.env',
  pro: '.prod.env',
};

export const EnvConfiguration = registerAs('config', () => {
  return {
    NODE_ENV: process.env.NODE_ENV || 'dev',
    MONGO_URI:
      process.env.MONGO_URI || 'mongodb://admin:admin@localhost:27017/',
    PORT: Number(process.env.PORT) || 3000,
  };
});

export const JoiValidationENV = Joi.object({
  MONGO_URI: Joi.required(),
  PORT: Joi.number().default(3000),
  NODE_ENV: Joi.required(),
  //MONGO_USERNAME: Joi.string().required(), //Docker Mongo
  //MONGO_PASSWORD: Joi.string().required(), //Docker Mongo
  //MONGO_DATABASE: Joi.string().required(), //Docker Mongo
});
