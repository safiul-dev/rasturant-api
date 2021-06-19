import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable } from '@nestjs/common';
import  JwtConstant  from './constant';


@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: JwtConstant().secret,
    });
  }

  async validate(payload: any) {
    
    return { 
        id: payload.id,
        // firstname: user.firstname, 
        // lastname: user.lastname, 
        // mobile: user.mobile, 
        email: payload.username 
    };
  }
}