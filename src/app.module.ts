import { Module } from '@nestjs/common';
import { MConfigModule } from './config/config.module';

@Module({
  imports: [MConfigModule],
})
export class AppModule {}
