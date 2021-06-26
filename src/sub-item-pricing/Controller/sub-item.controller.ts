import { Body, Controller, Delete, Get, Param, Post, Put, UseGuards, UsePipes, ValidationPipe } from '@nestjs/common';
import { CurrentUser } from 'src/auth/Custome-Decoreator/user.decorator';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { User } from 'src/users/users.model';
import { CreateSubPricingDto } from '../Model-Schema/sub-pricing.dto';
import { SubPricingService } from '../Service/sub-item.service';

@Controller('api/items/sub')
export class SubPricingController {
    constructor(private readonly subPricingService: SubPricingService) {}

    @Get()
    @UseGuards(JwtAuthGuard)
    async allItem() {
        const items = await this.subPricingService.index();
        return items;
    }

    @Post()
    @UseGuards(JwtAuthGuard)
    @UsePipes(new ValidationPipe({transform: true}))
    async addItem( @Body() itemDto: CreateSubPricingDto) {
        itemDto.uniq =itemDto.uniq;
        
        const item = await this.subPricingService.create(itemDto);
        return item;
    }

    @Get(':id')
    @UseGuards(JwtAuthGuard)
    async getOneitem(@Param('id') id: string) {
        const item = await this.subPricingService.edit(id);
        return item;
    }

    @Put(":id")
    @UseGuards(JwtAuthGuard)
    @UsePipes(new ValidationPipe({transform: true}))
    async itemUpdate(@Param('id') id: string, @Body() itemDto: CreateSubPricingDto) {
        const item = await this.subPricingService.update( id,itemDto);
        return item;
    }

    @Delete(':id')
    @UseGuards(JwtAuthGuard)
    async itemDelete(@Param('id') id: string) {
        const result = await this.subPricingService.delete(id);
        return result;
    }
}
