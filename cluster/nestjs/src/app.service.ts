import { Injectable } from '@nestjs/common';

const id = Math.floor(Math.random() * 1000);

@Injectable()
export class AppService {
  getHello(): string {
    return `Hello World! id=${id}`;
  }
}
