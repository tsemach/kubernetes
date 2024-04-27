import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Config } from './config';
import { UserEntity, UserModule } from './users';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './database';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      ...Config.pg.getConnectionParams(),
      entities: [UserEntity],
      synchronize: true,
    }),
    DatabaseModule,
    UserModule,
  ],  
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
