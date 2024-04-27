import { Module } from '@nestjs/common';
import { Database } from './database';
import { UserModule } from '../users';

@Module({
  imports: [UserModule],
  providers: [Database],
  controllers: [],
})
export class DatabaseModule {}