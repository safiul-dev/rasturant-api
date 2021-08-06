import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ItemManagementController } from './Controller/item-management.controller';
import { ItemSchema } from './Model-Schema/item.schema';
import { ItemManagementService } from './Service/item-management.service';
import { SubPricingModule } from '../sub-item-pricing/sub-pricing.module';


@Module({
  imports: [MongooseModule.forFeature([{
    name: "Item",
    schema: ItemSchema
  }]), SubPricingModule],
  providers: [ItemManagementService],
  controllers: [ItemManagementController],
  exports: [ItemManagementService]
})
export class ItemManagementModule {}
