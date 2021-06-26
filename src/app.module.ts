import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { ConfigModule } from '@nestjs/config';
import JwtConstant  from './auth/constant';
import { StoreManagementModule } from './store-management/store-management.module';
import { TableManagementModule } from './table-management/table-management.module';
import { CustomerModule } from './customer-management/customer.module';
import { WaiterManagementModule } from './waiter-management/waiter-management.module';
import { CategoryManagementModule } from './category-management/category-management.module';
import { ItemManagementModule } from './item-management/item-management.module';
import { SubPricingModule } from './sub-item-pricing/sub-pricing.module';
import { WorkPeriodsModule } from './work-periods/work-periods.module';


@Module({
  imports: [UsersModule,
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: ".env",
      load: [JwtConstant]
    }),
    MongooseModule.forRoot('mongodb+srv://letsbuild:anis5221@cluster0.wzqth.mongodb.net/restorent-api?retryWrites=true&w=majority', { useFindAndModify: false }),
    AuthModule,
    CustomerModule,
    StoreManagementModule,
    TableManagementModule,
    WaiterManagementModule,
    CategoryManagementModule,
    ItemManagementModule,
    SubPricingModule,
    WorkPeriodsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
