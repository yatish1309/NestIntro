import { forwardRef, Module } from "@nestjs/common";
import { UsersController } from "./users.controller";
import { UsersService } from "./providers/users.service";
import { AuthModule } from "src/auth/auth.module";

//forwardRef for the imports and injecting
@Module({
  imports:[forwardRef(()=>AuthModule)],
  controllers:[UsersController],
  providers:[UsersService],
  exports:[UsersService]
})
export class UserModule{}