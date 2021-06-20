import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { WaiterManagementController } from './Controller/waiter-management.controller';
import { WaiterSchema } from './Model-Schema/waiter.schema';
import { WaiterManagementService } from './Service/waiter-management.service';


@Module({
  imports: [MongooseModule.forFeature([{name: "Waiter", schema: WaiterSchema}])],
  providers: [WaiterManagementService],
  controllers: [WaiterManagementController]
})
export class WaiterManagementModule {}
