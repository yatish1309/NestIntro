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
import { UsersService } from './providers/users.service';
import { ApiOperation, ApiQuery, ApiResponse } from '@nestjs/swagger';

//http:localhost:3000/users
@Controller('users')
export class UsersController {

  constructor(private readonly usersService:UsersService){}



  @Get('/:id/')
  @ApiOperation({
    summary:'fetches list of users'
  })
  @ApiResponse({
    status:200,
    description:'users fetched successfully'
  })
  @ApiQuery({
    name:'limit',
    type:'number',
    required:false,
    description:'',
    example:10
  })
  @ApiQuery({
    name:'page',
    type:'number',
    required:false,
    description:'',
    example:1
  })
  public getUsers(
    @Param() getUsersParamDto: GetUsersParamDto,
    @Query() query: any,
    @Query('limit', new DefaultValuePipe(10), ParseIntPipe) limit: number,
    @Query('page', new DefaultValuePipe(1), ParseIntPipe) page: number,
  ) {

    return this.usersService.findAll(getUsersParamDto,limit,page);
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
