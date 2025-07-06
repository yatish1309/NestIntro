import { ApiPropertyOptional } from "@nestjs/swagger";
import { Type } from "class-transformer";
import { IsInt, IsNotEmpty, IsOptional } from "class-validator";

  export class GetUsersParamDto{
    @IsInt()
    @IsOptional()
    @ApiPropertyOptional({
      description:'Get user with a specific id',
      example:1234
    })
    @Type(()=>Number)
    id:number;
  }