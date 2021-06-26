import { Body, Controller, Delete, Get, Param, Post, Put, UseGuards, UsePipes, ValidationPipe } from '@nestjs/common';
import { CurrentUser } from 'src/auth/Custome-Decoreator/user.decorator';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { StoreManagementService } from 'src/store-management/Service/store-management.service';
import { User } from 'src/users/users.model';
import { CreateTableDto } from '../Model-Schema/table.dto';
import { TableManagementService } from '../Service/table-management.service';

@Controller('api/tables')
export class TableManagementController {
    
    constructor (private readonly tableService: TableManagementService, private storeService: StoreManagementService) {}

    @Get()
    @UseGuards(JwtAuthGuard)
    async getAll() {
        const tables = await this.tableService.findTable();
        return tables;
    }

    @Post()
    @UseGuards(JwtAuthGuard)
    @UsePipes(new ValidationPipe({transform: true}))
    async createtable(@CurrentUser() user: User,@Body() createtableDto: CreateTableDto) {
        
        createtableDto.storeId = (await this.storeService.findStoreId(user.id)).toString();
        createtableDto.userId = user.id;
        const table = await this.tableService.addTable(createtableDto);
        return table;
    }

    @Get(':id')
    @UseGuards(JwtAuthGuard)
    async gettableOne(@Param('id') id: string) {
        const table = await this.tableService.findOne(id)
        return table;
    }

    @Put(':id')
    @UseGuards(JwtAuthGuard)
    async updatetable(@Param('id') id: string, @Body() createtableDto: CreateTableDto) {
        const table = await this.tableService.updateTable(id, createtableDto);
        return table;
    }

    @Delete(':id')
    @UseGuards(JwtAuthGuard)
    async delete(@Param('id') id: string) {
        const result = await this.tableService.deleteTable(id);
        return result;
    }

}
