import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Config } from './config';
import { UsersEntity, UsersModule, UsersService } from './users';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './database';
import { UsersController } from './users/users.controller';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      ...Config.pg.getConnectionParams(),
      entities: [UsersEntity],
      synchronize: true,
    }),
    // DatabaseModule,
    UsersModule,
  ],  
  controllers: [AppController],
  providers: [AppService],  
  exports: [TypeOrmModule],
})
export class AppModule {}
