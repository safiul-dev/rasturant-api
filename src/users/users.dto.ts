import { IsEmail, IsNotEmpty, IsNumber, MaxLength, MinLength } from 'class-validator';
// import { Transform } from 'class-transformer';
// import * as bcrypt from "bcrypt";
//     const hashPassword = async user => {
//         return await bcrypt.hashSync(user.password, 10);
//     }
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

    
    // @Transform(hashPassword, {toClassOnly: true})
   
    password: string;
}