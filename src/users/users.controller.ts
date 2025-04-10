import { Body, Controller, DefaultValuePipe, Get, Headers, Param, ParseIntPipe, Post, Query } from "@nestjs/common";

//http:localhost:3000/users
@Controller('users')
export class UsersController{
  @Get('/:id/{:optional}')
  public getUsers(@Param() params:any,@Query() query:any,@Param('id',ParseIntPipe) id:number,
  @Query('limit',new DefaultValuePipe(10),ParseIntPipe) limit:number,
  @Query('page', new DefaultValuePipe(1), ParseIntPipe) page:number
){
    console.log(params)
    console.log(query)
    console.log(id,typeof id)
    console.log(limit,typeof limit)
    console.log(page,typeof page)

    return 'You sent a get req to users endpoint'
  }

  @Post()
  public createUsers(@Body() req:any,@Headers() headers:any){
    console.log(req)
    console.log(headers)
    return 'You sent a post req to users endpoint'
  }
}