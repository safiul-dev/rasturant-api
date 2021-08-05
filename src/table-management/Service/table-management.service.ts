import { Injectable, NotFoundException, UnprocessableEntityException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { StoreManagementService } from 'src/store-management/Service/store-management.service';
import { CreateTableDto } from '../Model-Schema/table.dto';
import { Table } from '../Model-Schema/table.model';

@Injectable()
export class TableManagementService {
    constructor (@InjectModel('Table') private tableModel: Model<Table>, private storeService: StoreManagementService) {}

    async findTable () {
        try {
            const tables = await this.tableModel.find();
            return tables.map((table) => ({
                uniq: table.uniq,
                userId: table.userId,
                storeId: table.storeId,
                title: table.title,
                capacity: table.capacity,
                available_status: table.available_status
            }))
        } catch (error) {
            throw new NotFoundException();
            
        }


    }

    async addTable(createTableDto: CreateTableDto): Promise<any> {
        
        
        const table = new this.tableModel(createTableDto);
        try {
            await table.save()
            return {
                message: "Table Created!"
            }
        } catch (error) {
            throw new UnprocessableEntityException()
            
        }
    }

    async findOne(id: string) {
        try {
            const table = await this.tableModel.findById(id).exec();
            return {
                uniq: table.uniq,
                userId: table.userId,
                storeId: table.storeId,
                title: table.title,
                capacity: table.capacity,
                available_status: table.available_status
            }
        } catch (error) {
            throw new NotFoundException();
        }
    }

    async updateTable (id: string, tableDto: CreateTableDto) {
        try {
            const table = await this.tableModel.findOneAndUpdate({uniq: id}, tableDto).exec();
        return "update Success";
        } catch (error) {
            throw new NotFoundException()
        }
        
    }

    async deleteTable(id: string) {
        await this.tableModel.findOneAndDelete({uniq: id}).exec();
        return {
            message: "Delete Success!"
        }
    }

    protected async findStorId(userId: string): Promise<string> {
        const storeId = await this.storeService.findStoreId(userId);
        return storeId as string;
    }
}
