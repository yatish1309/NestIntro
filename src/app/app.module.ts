import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from 'src/users/users.module';

@Module({
  // all our modules will be imported here
  imports: [UserModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
