import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { WorkPeriodsController } from './Controller/work-periods.controller';
import { WorkPeriodSchema } from './Schema/work-periods.schema';
import { WorkPeriodsService } from './Service/work-periods.service';


@Module({
  imports:[MongooseModule.forFeature([{name: "WorkPeriod", schema: WorkPeriodSchema}])],
  providers: [WorkPeriodsService],
  controllers: [WorkPeriodsController]
})
export class WorkPeriodsModule {}
