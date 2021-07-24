import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersSchema } from './Schema/users.schema';
import { UsersController } from './Controller/users.controller';
import { UsersService } from './Service/users.service';

@Module({
  imports: [MongooseModule.forFeature([{name: "User", schema: UsersSchema}])],
  providers: [UsersService],
  controllers: [UsersController],
  exports: [UsersService]
})
export class UsersModule {}
