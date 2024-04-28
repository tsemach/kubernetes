import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersService } from './users.service';
import { UsersEntity } from './users.entity';
import { UsersController } from './users.controller';
import { UsersDatabase } from './users.database';

@Module({
  imports: [TypeOrmModule.forFeature([ UsersEntity ])],
  providers: [UsersService, UsersDatabase],
  exports: [TypeOrmModule],
  controllers: [UsersController],
})
export class UsersModule {}