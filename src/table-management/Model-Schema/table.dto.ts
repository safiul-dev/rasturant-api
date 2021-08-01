import { IsBoolean, IsNumber, IsNumberString, IsString, Length } from "class-validator"

export class CreateTableDto {

     uniq: string
    
     userId: string

     storeId: string

//     @IsString()
//     @Length(2, 256)
     title: string

     @IsNumber()
     capacity: number

//     @IsBoolean()
     available_status: boolean
}