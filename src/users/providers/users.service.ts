import { forwardRef, Inject, Injectable } from '@nestjs/common';
import { GetUsersParamDto } from '../dtos/get-users-param.dto';
import { AuthService } from 'src/auth/providers/auth.service';
import { User } from '../user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDTO } from '../dtos/create-users.dto';

/**
 * Class to connect to Users and do operations
 */
@Injectable()
export class UsersService {
  constructor(
    @Inject(forwardRef(() => AuthService))
    private readonly authService: AuthService,
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}
  public findAll(
    getUsersParamDto: GetUsersParamDto,
    limit: number,
    page: number,
  ) {
    const isAuth = this.authService.isAuth();
    console.log(isAuth);
    return [
      {
        firstName: 'john',
        email: 'joe@yopmail.com',
      },
      {
        firstName: 'alice',
        email: 'mice@yopmail.com',
      },
    ];
  }

  public findOneById(id: string) {
    return {
      id: 1234,
      firstName: 'alice',
      email: 'mice@yopmail.com',
    };
  }

  public async createUser(createUserDto: CreateUserDTO) {
    //check if user exists
    const existingUser =  await this.usersRepository.findOne({
      where:{
        email:createUserDto.email
      },
    })
    //handle Exception
    //create a new user
    let newUser = this.usersRepository.create(createUserDto);
    newUser=await this.usersRepository.save(newUser);

    return newUser;
  }
}
