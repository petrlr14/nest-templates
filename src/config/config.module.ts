import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import * as joi from 'joi';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      //TODO: define your .env attributes
      validationSchema: joi.object({}),
    }),
  ],
})
export class MConfigModule {}
