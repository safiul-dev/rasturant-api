import { IsBoolean, IsNumberString, IsString, Length } from "class-validator"

export class CreateStoreDto {

     uniq: string
    
     userId: string

    @IsString()
    @Length(2, 256)
     title: string

    @IsBoolean()
     active: boolean
}