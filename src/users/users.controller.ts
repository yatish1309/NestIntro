import { Body, Controller, Get, Param, Post, Query } from "@nestjs/common";

//http:localhost:3000/users
@Controller('users')
export class UsersController{
  @Get('/:id/{:optional}')
  public getUsers(@Param() params:any,@Query() query:any){
    console.log(params)
    console.log(query)
    return 'You sent a get req to users endpoint'
  }

  @Post()
  public createUsers(@Body() req:any){
    console.log(req)
    return 'You sent a post req to users endpoint'
  }
}