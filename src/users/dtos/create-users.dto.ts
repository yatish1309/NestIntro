import {IsEmail, IsNotEmpty, IsOptional, IsString, Matches, MaxLength, MinLength} from 'class-validator'

// second argument is an object that can be given to any of the decorators
export class CreateUserDTO{
    @IsString()
    @IsNotEmpty()
    @MinLength(3)
    @MaxLength(96)
    firstName:string;

    @IsString()
    @IsOptional()
    @MinLength(3)
    lastName?:string;

    @IsNotEmpty()
    @IsEmail()
    email:string;

    @IsString()
    @IsNotEmpty()
    @MinLength(8)
    @Matches( /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
      {
        message:'password must have these things'
      }
    )
    password:string;
}