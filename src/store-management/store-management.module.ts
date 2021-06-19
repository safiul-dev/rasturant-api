import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { StoreManagementController } from './Controller/store-management.controller';
import { StoreSchema } from './Model-Schema/store.schema';
import { StoreManagementService } from './Service/store-management.service';


@Module({
  imports: [MongooseModule.forFeature([{name: "Store", schema: StoreSchema}])],
  providers: [StoreManagementService],
  controllers: [StoreManagementController],
  exports: [StoreManagementService]
})
export class StoreManagementModule {}
