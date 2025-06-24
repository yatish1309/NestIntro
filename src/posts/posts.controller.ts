import { Controller, Get, Param } from '@nestjs/common';
import { PostsService } from './providers/posts.service';

@Controller('posts')
export class PostsController {
  constructor(private readonly postsService:PostsService){}

  @Get('/:id')
  public getPosts(@Param() params){
    console.log(params)
    return this.postsService.findAll(params.id);
  }
}
