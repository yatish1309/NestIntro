import { PartialType } from "@nestjs/mapped-types";
import { CreateUserDTO } from "./create-users.dto";
//mapped types
export class PatchUserDto extends PartialType(CreateUserDTO){}