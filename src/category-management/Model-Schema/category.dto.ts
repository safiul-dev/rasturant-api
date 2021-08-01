import { IsBoolean, IsString, Length } from "class-validator"

export class CreateCategoryDto {

    uniq: string
    userId: string
    parent: string
    @IsString()
    @Length(2, 256)
    title: string
    active: boolean
}