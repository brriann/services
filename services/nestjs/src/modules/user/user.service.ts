import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}

  findAll() {
    //return this.usersRepository.find();
  }

  findOne(id: string) {
    //return this.usersRepository.findOne(id);
  }

  async remove(id: string) {
    //await this.usersRepository.delete(id);
  }

//   findAll(): Promise<User[]> {
//     return this.usersRepository.find();
//   }

//   findOne(id: string): Promise<User> {
//     return this.usersRepository.findOne(id);
//   }

//   async remove(id: string): Promise<void> {
//     await this.usersRepository.delete(id);
//   }
}