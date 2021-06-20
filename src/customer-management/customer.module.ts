import { Module } from '@nestjs/common';
import { CustomerService } from './Service/customer.service';
import { CustomerController } from './Controller/customer.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { CustomerSchema } from './Model-Schema/customer.schema';

@Module({
  imports: [MongooseModule.forFeature([{name: "Customer", schema: CustomerSchema}])],
  providers: [CustomerService],
  controllers: [CustomerController]
})
export class CustomerModule {}
