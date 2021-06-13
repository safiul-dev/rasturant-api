import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { ConfigModule } from '@nestjs/config';
import { JwtConstant } from './auth/constant';
import { CustomerModule } from './customer/customer.module';

@Module({
  imports: [UsersModule,
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: ".env",
      
    }),
    MongooseModule.forRoot('mongodb+srv://letsbuild:anis5221@cluster0.wzqth.mongodb.net/restorent-api?retryWrites=true&w=majority'), AuthModule, CustomerModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
