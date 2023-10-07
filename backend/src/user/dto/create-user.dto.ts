import { IsNotEmpty, IsString } from 'class-validator';
import { User } from '../interfaces';

export class CreateUserDto implements Omit<User, 'id'> {
  @IsNotEmpty()
  @IsString()
  firstName: string;

  @IsNotEmpty()
  @IsString()
  lastName: string;

  @IsNotEmpty()
  @IsString()
  chatId: string;
}
