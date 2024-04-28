import  request from 'supertest';
import { Initiator } from '../common';
import { Application } from '../../src/application';
import { Database, DatabaseModule } from '../../src/database';
import { UsersEntity } from '../../src/users';
import { UUIDv4 } from '../../src/utils';

describe('User Entity API Test', () => {  

  before(async () => {
    await Initiator.instance.init()
  }); 

  it('users-load.test.ts: test database load all users', async () => {    
    const db = Application.instance.get<Database>(DatabaseModule, Database)            
    const user: UsersEntity = new UsersEntity()    

    user.id = UUIDv4.gen(),
    user.name = 'tsemach'

    await db.saveUser(user)
    const users = await db.loadUsers()

    console.log('users:', users)
  });

  it('users-load.test.ts: test user controller load all users', async () => {
    const app = Application.instance.app

    const users = await request(app.getHttpServer())
      .get('/api/v1/users')
      .expect(200)
    
    console.log('[test] users:', users.body)
  });
});
