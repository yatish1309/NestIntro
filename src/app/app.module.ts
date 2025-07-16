import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from 'src/users/users.module';
import { PostsModule } from 'src/posts/posts.module';
import { AuthModule } from 'src/auth/auth.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/users/user.entity';

@Module({
  // all our modules will be imported here
  imports: [
    UserModule,
    PostsModule,
    AuthModule,
    //synchronus
    // TypeOrmModule.forRoot({
    //   type: 'postgres',
    //   entities: [],
    //   synchronize: true,
    //   username: 'postgres',
    //   port: 5432,
    //   password: 'Ram@36',
    //   host: 'localhost',
    //   database: 'nestjs-blog',
    // }),
    //asynchronus
    TypeOrmModule.forRootAsync({
      imports: [],
      inject: [],
      useFactory: () => ({
        type: 'postgres',
        entities: [User],
        synchronize: true,
        username: 'postgres',
        port: 5432,
        password: 'Ram@36',
        host: 'localhost',
        database: 'nestjs-blog',
      }),
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
