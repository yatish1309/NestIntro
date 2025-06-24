import { Injectable } from "@nestjs/common";
import { UsersService } from "src/users/providers/users.service";


@Injectable()
export class PostsService{
  constructor(private readonly userService:UsersService){
  }

  public findAll(userId:string){
    const user=this.userService.findOneById(userId)
    return[
      {
        user:user,
        title:'tiiei',
        content:'test content'
      },
      {
        user:user,
        title:'tiieifsdf',
        content:'test content'
      }
    ]
  }
}