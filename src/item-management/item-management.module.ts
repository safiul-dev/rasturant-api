import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ItemManagementController } from './Controller/item-management.controller';
import { ItemSchema } from './Model-Schema/item.schema';
import { ItemManagementService } from './Service/item-management.service';


@Module({
  imports: [MongooseModule.forFeature([{
    name: "Item",
    schema: ItemSchema
  }])],
  providers: [ItemManagementService],
  controllers: [ItemManagementController]
})
export class ItemManagementModule {}
