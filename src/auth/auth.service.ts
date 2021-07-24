import { Injectable } from '@nestjs/common';
import * as bcrypt from "bcrypt";
import { JwtService } from '@nestjs/jwt';
import { UsersService } from 'src/users/Service/users.service';
@Injectable()
export class AuthService {
    constructor(
      private readonly usersService: UsersService,
      private readonly jwtService: JwtService
      ) {}

    async validateUser(username: string, pass: string): Promise<any> {

        const user = await this.usersService.getOne(username);
        if (user && await bcrypt.compare(pass, user.password)) {
          const { password, ...result } = user;
          return result;
        }
        
        return null;
    
      }

      async login(user: any) {
        const payload = {id: user.id, username: user.username};
        return {
          token: this.jwtService.sign(payload)
        };
      }
}
