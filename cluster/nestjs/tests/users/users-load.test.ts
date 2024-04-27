import  request from 'supertest';
import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import { AppModule } from '../../src/app.module'
import { Initiator } from '../common';
import { Application } from '../../src/application';
import { Database, DatabaseModule } from '../../src/database';
import { UserEntity } from '../../src/users';
import { UUIDv4 } from '../../src/utils';

describe('User Entity API Test', () => {  

  before(async () => {
    await Initiator.instance.init()
  }); 

  it('users-load.test.ts: test load all users', async () => {    
    const db = Application.instance.get<Database>(DatabaseModule, Database)            
    const user: UserEntity = new UserEntity()    

    user.id = UUIDv4.gen(),
    user.name = 'tsemach'

    await db.saveUser(user)
    const users = await db.loadUsers()

    console.log('users:', users)
  });
});
