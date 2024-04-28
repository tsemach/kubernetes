import { Module } from '@nestjs/common';
import { Database } from './database';
import { UsersModule } from '../users';

@Module({
  imports: [UsersModule],
  providers: [Database],
  controllers: [],
})
export class DatabaseModule {}