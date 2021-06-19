import { Body, Controller, Delete, Get, Param, Post, Put, UseGuards, UsePipes, ValidationPipe } from '@nestjs/common';
import { CurrentUser } from 'src/auth/Custome-Decoreator/user.decorator';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { User } from 'src/users/users.model';
import { CreateStoreDto } from '../Model-Schema/store.dto';
import { StoreManagementService } from '../Service/store-management.service';

@Controller('api/store')
export class StoreManagementController {
    constructor (private readonly storeService: StoreManagementService) {}

    @Get()
    @UseGuards(JwtAuthGuard)
    async getAll() {
        const stores = await this.storeService.findStors();
        return stores;
    }

    @Post()
    @UseGuards(JwtAuthGuard)
    @UsePipes(new ValidationPipe({transform: true}))
    async createStore(@CurrentUser() user: User,@Body() createStoreDto: CreateStoreDto) {
        
        createStoreDto.uniq = user.id + createStoreDto.uniq
        createStoreDto.userId = user.id;
         const store = await this.storeService.addStore(createStoreDto);
        return store;
    }

    @Get(':id')
    @UseGuards(JwtAuthGuard)
    async getStoreOne(@Param('id') id: string) {
        const store = await this.storeService.findOne(id)
        return store;
    }

    @Put(':id')
    @UseGuards(JwtAuthGuard)
    async updateStore(@Param('id') id: string, @Body() createStoreDto: CreateStoreDto) {
        const store = await this.storeService.updateStore(id, createStoreDto);
        return store;
    }

    @Delete(':id')
    @UseGuards(JwtAuthGuard)
    async delete(@Param('id') id: string) {
        const result = await this.storeService.deleteStore(id);
        return result;
    }


    


}
