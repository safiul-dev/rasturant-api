import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { StoreManagementModule } from 'src/store-management/store-management.module';
import { TableManagementController } from './Controller/table-management.controller';
import { TableSchema } from './Model-Schema/table.schema';
import { TableManagementService } from './Service/table-management.service';

@Module({
  imports: [MongooseModule.forFeature([{name: "Table", schema: TableSchema}]), StoreManagementModule],
  providers: [TableManagementService],
  controllers: [TableManagementController]
})
export class TableManagementModule {}
