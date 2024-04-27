import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { UserEntity } from '../users'
import { FindManyOptions, Repository } from "typeorm";
import { utils } from "../utils";
// const logger = Logger.get('database')

@Injectable()
export class Database {

  constructor(    
    @InjectRepository(UserEntity) private usersRepository: Repository<UserEntity>,
  ) {}
  
  async loadUsers(): Promise<UserEntity[]> {    
    return await this.usersRepository.find()        
  }

  async saveUser(user: UserEntity) {     
    await user.save() 
  }
  
  // async loadTermination(terminationId: string) {
  //   return await this.termRepository
  //   .createQueryBuilder("terminations")
  //   .where("terminations.id = :terminationId", { terminationId })
  //   .getOne()
  // }

  // async loadTasks(terminationId: string) {
  //   return await this.usersRepository
  //     .createQueryBuilder("tasks")
  //     .where("tasks.termination_id = :terminationId", { terminationId })
  //     .getMany()
  // }

  // async remove(ds: Datasource) {    
  //   const promises = [
  //     ...[...Object.values(ds.tasks).map(t => t.remove())]
  //   ]    
  //   await Promise.all(promises) 
  //   await ds.termination.remove()
  // }

}