import { Injectable } from '@nestjs/common';
import { UserEntity } from './user.entity';

@Injectable()
export class UserService {

  constructor(
    // @InjectRepository(TaskEntity) private tasksRepository: Repository<TaskEntity>,
  ) {}

  async loadAll() {
    
  }

  async save(task: UserEntity) {
    // await this.tasksRepository.save(task);
  }  
}