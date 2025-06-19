import { Type } from "class-transformer";
import { IsInt, IsNotEmpty, IsOptional } from "class-validator";

  export class GetUsersParamDto{
    @IsNotEmpty()
    @IsInt()
    @Type(()=>Number)
    id:number;

    @IsOptional()
    optional:number;
  }