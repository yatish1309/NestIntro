import { forwardRef, Inject, Injectable } from '@nestjs/common';
import { GetUsersParamDto } from '../dtos/get-users-param.dto';
import { AuthService } from 'src/auth/providers/auth.service';

//required for export / provide
@Injectable()
export class UsersService {
  constructor(
    @Inject(forwardRef(()=>AuthService))
    private readonly authService:AuthService){}
  public findAll(
    getUsersParamDto: GetUsersParamDto,
    limit: number,
    page: number,
  ) {
    const isAuth=this.authService.isAuth();
    console.log(isAuth)
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
}
