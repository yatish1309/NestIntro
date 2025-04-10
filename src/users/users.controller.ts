import { Body, Controller, Get, Headers, Param, Post, Query } from "@nestjs/common";

//http:localhost:3000/users
@Controller('users')
export class UsersController{
  @Get('/:id/{:optional}')
  public getUsers(@Param() params:any,@Query() query:any,@Param('id') id:any){
    console.log(params)
    console.log(query)
    console.log(id)
    return 'You sent a get req to users endpoint'
  }

  @Post()
  public createUsers(@Body() req:any,@Headers() headers:any){
    console.log(req)
    console.log(headers)
    return 'You sent a post req to users endpoint'
  }
}