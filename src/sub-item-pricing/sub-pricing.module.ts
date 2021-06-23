import { Module } from '@nestjs/common';
import { SubPricingService } from './Service/sub-item.service';
import { SubPricingController } from './Controller/sub-item.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { SubPricingSchema } from './Model-Schema/sub-pricing.schema';

@Module({
  imports: [MongooseModule.forFeature([{
    name: "SubPricing",
    schema: SubPricingSchema
  }])],
  providers: [SubPricingService],
  controllers: [SubPricingController]
})
export class SubPricingModule {}
