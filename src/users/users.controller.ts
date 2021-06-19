import { Body, Controller, Get, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { CreateUsersDto } from './users.dto';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
    constructor(private readonly usersService: UsersService) {}

    @Get()
    async allUser() {
        const users = await this.usersService.index();
        return users;
    }

    @Post()
    @UsePipes(new ValidationPipe({ transform: true }))
    async addUser(@Body() createUsersDto: CreateUsersDto) {
        const user = await this.usersService.create(createUsersDto);
        return user;
    }

    // @Get()
    // singleUser() {
    //     const user = this.usersService.getOne("parsonal494@gmail.com");
    //     return user;
    // }
}
