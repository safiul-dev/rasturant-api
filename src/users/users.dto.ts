import { IsEmail, IsNotEmpty, IsNumber, MaxLength, MinLength } from 'class-validator';

export class CreateUsersDto {
    @IsNotEmpty()
    @MaxLength(56)
    firstname: string

    @MaxLength(56)
    lastname: string;

    @IsEmail()
    username: string;

   
    @MaxLength(12)
    mobile: string;

   
    password: string;
}