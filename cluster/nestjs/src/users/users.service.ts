import { Inject, Injectable } from '@nestjs/common';
import { UsersEntity } from './users.entity';
import { Application } from '../application';
import { Database, DatabaseModule } from '../database';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UsersDatabase } from './users.database';

@Injectable()
export class UsersService {
  
  constructor(private db: UsersDatabase
    // @InjectRepository(UsersEntity) private tasksRepository: Repository<UsersEntity>,
  ) {}

  async loadAll() {
    // const db = Application.instance.get<Database>(DatabaseModule, Database)            
    
    return await this.db.loadUsers() 
  }

  async save(task: UsersEntity) {
    // await this.tasksRepository.save(task);
  }  
}