import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { MongooseModule } from '@nestjs/mongoose';
import { PassportModule } from '@nestjs/passport';
import { UsersModule } from 'src/users/users.module';
import { UsersSchema } from 'src/users/users.schema';
import { AuthService } from './auth.service';
import { JwtConstant } from './constant';
import { JwtStrategy } from './jwt.strategy';
import { LocalStrategy } from './local.strategy';

@Module({
  imports: [
    UsersModule,
    MongooseModule.forFeature([{name:"Usesr", schema: UsersSchema}]),
    PassportModule,
    JwtModule.register({
      secret: JwtConstant.secret,
      signOptions: {expiresIn: '120s'}
    })
    ],
  providers: [AuthService, LocalStrategy, JwtStrategy],
  exports: [AuthService, JwtModule]
})
export class AuthModule {}
