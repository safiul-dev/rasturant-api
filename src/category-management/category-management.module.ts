import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersModule } from 'src/users/users.module';
import { CategoryManagementController } from './Controller/category-management.controller';
import { CategorySchema } from './Model-Schema/category.schema';
import { CategoryManagementService } from './Service/category-management.service';

@Module({
  imports: [
    MongooseModule.forFeature([{name: "Category", schema: CategorySchema}]),
    UsersModule
],
  providers: [CategoryManagementService],
  controllers: [CategoryManagementController]
})
export class CategoryManagementModule {}
