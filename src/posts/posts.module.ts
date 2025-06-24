import { Module } from '@nestjs/common';
import { PostsController } from './posts.controller';
import { PostsService } from './providers/posts.service';
import { UserModule } from 'src/users/users.module';

@Module({
  imports:[UserModule],
  controllers: [PostsController],
  providers:[PostsService]
})
export class PostsModule {}
