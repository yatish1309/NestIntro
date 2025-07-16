import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { postType } from './enums/postType.enum';
import { postStatus } from './enums/poststatus.enum';
import { CreatePostsMetaOptionsDto } from './dtos/create-posts-meta-options.dto';

@Entity()
export class Post {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    type: 'varchar',
    nullable: false,
  })
  title: string;

  @Column({
    type: 'enum',
    enum:postType,
    nullable: false,
    default:postType.POST
  })
  postType: postType;

  @Column({
    type: 'varchar',
    nullable: false,
    unique:true
  })
  slug: string;

  @Column({
    type: 'enum',
    enum:postStatus,
    nullable: false,
    default:postStatus.DRAFT
  })
  status: postStatus;

  @Column({
    type: 'text',
    nullable: true,
  })
  content?: string;

  @Column({
    type: 'text',
    nullable: true,
  })
  schema?: string;

  @Column({
    type: 'varchar',
    nullable: true,
  })
  featuredImageUrl?: string;

  @Column({
    type: 'timestamp', //datetime in mysql
    nullable: true,
  })
  publishOn?: string;

//we will work on these in s7
  tags: string[];
  metaOptions: CreatePostsMetaOptionsDto;
}
