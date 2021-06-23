import { Body, Controller, Delete, Get, Param, Post, Put, UseGuards, UsePipes, ValidationPipe } from '@nestjs/common';
import { CurrentUser } from 'src/auth/Custome-Decoreator/user.decorator';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { User } from 'src/users/users.model';
import { CreateItemDto } from '../Model-Schema/item.dto';
import { ItemManagementService } from '../Service/item-management.service';

@Controller('api/items')
export class ItemManagementController {
    constructor(private readonly itemService: ItemManagementService) {}

    @Get()
    @UseGuards(JwtAuthGuard)
    async allItem() {
        const items = await this.itemService.index();
        return items;
    }

    @Post()
    @UseGuards(JwtAuthGuard)
    @UsePipes(new ValidationPipe({transform: true}))
    async addItem(@CurrentUser() user: User, @Body() itemDto: CreateItemDto) {
        itemDto.uniq = user.id + itemDto.uniq;
        itemDto.userId = user.id;
        const item = await this.itemService.create(itemDto);
        return item;
    }

    @Get(':id')
    @UseGuards(JwtAuthGuard)
    async getOneItem(@Param('id') id: string) {
        const item = await this.itemService.edit(id);
        return item;
    }

    @Put(":id")
    @UseGuards(JwtAuthGuard)
    @UsePipes(new ValidationPipe({transform: true}))
    async itemUpdate(@Param('id') id: string, @Body() itemDto: CreateItemDto) {
        const item = await this.itemService.update( id,itemDto);
        return item;
    }

    @Delete(':id')
    @UseGuards(JwtAuthGuard)
    async itemDelete(@Param('id') id: string) {
        const result = await this.itemService.delete(id);
        return result;
    }
}
