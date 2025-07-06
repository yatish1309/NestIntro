// import { PartialType } from "@nestjs/mapped-types";
import { ApiProperty,PartialType } from "@nestjs/swagger";
import { IsInt, IsNotEmpty } from "class-validator";
import { CreatePostDto } from "./create-post.dto";

export class PatchPostsDto extends PartialType(CreatePostDto){

  @ApiProperty({
    description: 'ID of the post to be updated',
  })
  @IsInt()
  @IsNotEmpty()
  id:number;
}