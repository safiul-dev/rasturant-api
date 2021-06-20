
import { IsBoolean, IsEmail, IsNotEmpty, Length, MaxLength } from 'class-validator';

export class CreateCustomerDto {

    uniq: string
    userId: string
    @IsNotEmpty()
    @Length(2,56)
    name: string

    email: string;
    phone: string;
    address: string;
    @IsBoolean()
    active: boolean;

}