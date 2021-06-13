
import { IsEmail, IsNotEmpty, MaxLength } from 'class-validator';

export class CreateCustomerDto {
    @IsNotEmpty()
    @MaxLength(56)
    customer_name: string

    @IsNotEmpty()
    @MaxLength(56)
    customer_phone: string;

    @MaxLength(192)
    address: string;

}