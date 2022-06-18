import { Injectable } from '@nestjs/common';
import { HELLO_WORLD } from './constants';

@Injectable()
export class AppService {
  getHello(): string {
    return HELLO_WORLD;
  }
}
