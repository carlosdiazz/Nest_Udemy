import { Module, Global } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigType } from '@nestjs/config';

import { EnvConfiguration } from './../config/app.config';

@Global()
@Module({
  imports: [
    MongooseModule.forRootAsync({
      inject: [EnvConfiguration.KEY],
      useFactory: async (
        configService: ConfigType<typeof EnvConfiguration>,
      ) => {
        const { MONGO_URI } = configService;
        return {
          uri: MONGO_URI,
        };
      },
    }),
  ],
  exports: [MongooseModule],
})
export class MongoModule {}
