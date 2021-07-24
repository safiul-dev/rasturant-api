import { Body, Controller, Delete, Get, Param, Post, Put, UseGuards, UsePipes, ValidationPipe } from '@nestjs/common';
import { CurrentUser } from 'src/auth/Custome-Decoreator/user.decorator';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { User } from 'src/users/Model/users.model';
import { CreateWaiterDto } from '../Model-Schema/waiter.dto';
import { WaiterManagementService } from '../Service/waiter-management.service';

@Controller('api/waiter')
export class WaiterManagementController {

    constructor(private readonly waiterService: WaiterManagementService) {}

    @Get()
    @UseGuards(JwtAuthGuard)
    async allWaiter() {
        const waiters = await this.waiterService.index();
        return waiters;
    }

    @Post()
    @UseGuards(JwtAuthGuard)
    @UsePipes(new ValidationPipe({transform: true}))
    async addWaiter(@CurrentUser() user: User, @Body() waiterDto: CreateWaiterDto) {
        waiterDto.userId = user.id;
        const waiter = await this.waiterService.create(waiterDto);
        return waiter;
    }

    @Get(':id')
    @UseGuards(JwtAuthGuard)
    async getOneWaiter(@Param('id') id: string) {
        const waiter = await this.waiterService.edit(id);
        return waiter;
    }

    @Put(":id")
    @UseGuards(JwtAuthGuard)
    @UsePipes(new ValidationPipe({transform: true}))
    async waiterUpdate(@Param('id') id: string, @Body() waiterDto: CreateWaiterDto) {
        const waiter = await this.waiterService.update( id,waiterDto);
        return waiter;
    }

    @Delete(':id')
    @UseGuards(JwtAuthGuard)
    async waiterDelete(@Param('id') id: string) {
        const result = await this.waiterService.delete(id);
        return result;
    }
}
