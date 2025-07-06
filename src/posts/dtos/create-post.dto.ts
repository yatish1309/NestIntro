import { IsArray, IsDate, IsEnum, IsJSON, IsNotEmpty, IsOptional, IsString, IsUrl, Matches, MinLength, ValidateNested } from "class-validator";
import { postStatus } from "../enums/poststatus.enum";
import { postType } from "../enums/postType.enum";
import { CreatePostsMetaOptionsDto } from "./create-posts-meta-options.dto";
import { Type } from "class-transformer";
import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";


export class CreatePostDto {
  @IsString()
  @MinLength(4)
  @IsNotEmpty()
  @ApiProperty({
    description: 'Title of the post',
    example: 'My First Post'
  })
  title:string;

  @IsEnum(postType)
  @IsNotEmpty()
  @ApiProperty({
    description: 'Type of the post',
    enum: postType,
    example: postType.POST
  })
  postType:postType;

  @IsString()
  @IsNotEmpty()
  @Matches(/^[a-z0-9]+(?:-[a-z0-9]+)*$/,{
    message:'slug like my-url'
  })
  @ApiProperty({
    description: 'Slug for the post, should be URL friendly',
    example: 'my-first-post'
  })
  slug:string;

  @IsEnum(postStatus)
  @IsNotEmpty()
  @ApiProperty({
    description: 'Status of the post',
    enum: postStatus,
    example: postStatus.DRAFT
  })
  status:postStatus;

  @IsString()
  @IsOptional()
  @ApiPropertyOptional({
    description: 'Content of the post, can be HTML or Markdown',
    example: 'This is my first post'
  })
  content?:string;

  @IsOptional()
  @IsJSON()
  @ApiPropertyOptional({
    description: 'Configuration object for the post, can include various settings',
    example: '{"layout": "default", "sidebar": true}'
  })
  schema?:string;

  @IsUrl()
  @IsOptional()
  @ApiPropertyOptional({
    description: 'URL of the featured image for the post',
    example: 'https://example.com/image.jpg'
  })
  featuredImageUrl?:string;

  @IsDate()
  @IsOptional()
  @ApiPropertyOptional({
    description: 'Date when the post is scheduled to be published',
    example: '2023-10-01T00:00:00Z'
  })
  publishOn?:Date;

  @IsOptional()
  @IsArray()
  //for an array in the configuration object we pass each:true
  @IsString({each:true})
  @MinLength(3,{each:true})
  @ApiPropertyOptional({
    description: 'Array of tags associated with the post',
    example: ['technology', 'nestjs', 'typescript']
  })
  tags?:String[];

  @IsOptional()
  @IsArray()
  @ValidateNested({each:true})
  @Type(()=>CreatePostsMetaOptionsDto)
  @ApiPropertyOptional({
    type:'array',
    required:false,
    items:{
      type:'object',
      properties:{
        key:{
          type:'string'
        },
        value:{
          type:'string'
        }
      }
    }
  })
  metaOptions?:CreatePostsMetaOptionsDto[]
}