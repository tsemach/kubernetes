import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserService } from './user.service';
import { UserEntity } from './user.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ UserEntity ])],
  providers: [UserService],
  exports: [TypeOrmModule],
  controllers: [],
})
export class UserModule {}