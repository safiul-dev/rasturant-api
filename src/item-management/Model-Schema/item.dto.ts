import { IsBoolean, IsString, Length } from "class-validator"

export class CreateItemDto {
    uniq: string
    userId: string
    @IsString()
    @Length(2, 256)
    title: string
    description: string
    price: string
    categoryUniq: string
    active: boolean
}