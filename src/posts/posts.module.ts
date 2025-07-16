import { Module } from '@nestjs/common';
import { PostsController } from './posts.controller';
import { PostsService } from './providers/posts.service';
import { UserModule } from 'src/users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Post } from './post.entity';

@Module({
  imports:[UserModule, TypeOrmModule.forFeature([Post])],
  controllers: [PostsController],
  providers:[PostsService]
})
export class PostsModule {}
