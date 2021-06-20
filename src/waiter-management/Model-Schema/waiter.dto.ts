import { IsBoolean, IsString, Length } from "class-validator"

export class CreateWaiterDto {

    uniq: string
    userId: string
    @IsString()
    @Length(2, 256)
    name: string
    email: string
    phone: string
    address: string
    @IsBoolean()
    active: boolean
}