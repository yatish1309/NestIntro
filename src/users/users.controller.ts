import {
  Body,
  Controller,
  DefaultValuePipe,
  Get,
  Headers,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  Query,
  ValidationPipe,
} from '@nestjs/common';
import { CreateUserDTO } from './dtos/create-users.dto';
import { GetUsersParamDto } from './dtos/get-users-param.dto';
import { PatchUserDto } from './dtos/patch-user.dto';

//http:localhost:3000/users
@Controller('users')
export class UsersController {
  @Get('/:id/{:optional}')
  public getUsers(
    @Param() params: GetUsersParamDto,
    @Query() query: any,
    @Query('limit', new DefaultValuePipe(10), ParseIntPipe) limit: number,
    @Query('page', new DefaultValuePipe(1), ParseIntPipe) page: number,
  ) {
    console.log(params);
    console.log(query);
    console.log(limit, typeof limit);
    console.log(page, typeof page);

    return 'You sent a get req to users endpoint';
  }

  @Post()
  public createUsers(@Body() createUserDto: CreateUserDTO, @Headers() headers: any) {
    console.log(createUserDto);
    console.log(headers);
    return 'You sent a post req to users endpoint';
  }

  @Patch()
  public patchUsers(@Body() patchUserDto:PatchUserDto){
    return patchUserDto;
  }
}
