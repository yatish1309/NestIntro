import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';
import { PostsService } from './providers/posts.service';
import { CreatePostDto } from './dtos/create-post.dto';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';
import { PatchPostsDto } from './dtos/patch-posts.dto';

@Controller('posts')
export class PostsController {
  constructor(private readonly postsService:PostsService){}

  @Get('/:id')
  public getPosts(@Param() params){
    console.log(params)
    return this.postsService.findAll(params.id);
  }


  @ApiOperation({
    summary: 'Create a new post',
  })
  @ApiResponse({
    status: 201,
    description: 'Post created successfully',
  })
  @Post()
  public createPosts(@Body() createPostDto:CreatePostDto){
  }

  @ApiOperation({
    summary: 'Update a post',
  })
  @ApiResponse({
    status: 200,
    description: 'Post updated successfully',
  })
  @Patch()
  public updatePost(@Body() patchPostsDto:PatchPostsDto){}
}
