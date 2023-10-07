import { Injectable, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UserService {
  private readonly logger = new Logger(UserService.name);
  constructor(
    @InjectRepository(User) private userRepository: Repository<User>,
  ) {}

  create(createUserDto: CreateUserDto) {
    this.logger.log(JSON.stringify(createUserDto));
    const user = this.userRepository.create(createUserDto);
    return this.userRepository.save(user);
  }

  findAll() {
    this.logger.log('In findAll');
    return this.userRepository.find();
  }

  findOne(id: number) {
    this.logger.log('Finding user by id: ' + id);
    return this.userRepository.findOneBy({ id });
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    this.logger.log('Updating user by id: ' + id);
    return this.userRepository.update({ id }, updateUserDto);
  }

  remove(id: number) {
    this.logger.log('Removing user by id: ' + id);
    return this.userRepository.delete({ id });
  }
}
