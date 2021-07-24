import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import * as bcrypt from "bcrypt";
import { User } from '../Model/users.model';
import { CreateUsersDto } from '../Dto/users.dto';

@Injectable()
export class UsersService {
    constructor(@InjectModel('User') private userModel: Model<User>){}

    async index(): Promise<User | any> {
        const users = await this.userModel.find().exec();
        return users.map((user) => ({
            id: user.id,
            firstname: user.firstname,
            lastname: user.lastname,
            email: user.username,
            mobile: user.mobile
        }))
    }
    async create(createUserDto: CreateUsersDto) {
        createUserDto.password = this.passwordHashed(createUserDto.password);
        const user = new this.userModel(createUserDto);
        await user.save();
        return "Success"
    }

    async getOne(username: string) {
        const user = await this.userModel.findOne({username: username}).exec();
        return {
            id: user.id,
            username: user.username,
            password: user.password
        }
    }

    // password Hasshing method
     protected passwordHashed(password: string) {
        const pass = bcrypt.hashSync(password, 10);
        return pass;
    }


    // finding user using id here....
     async edit (id: string) {
        const user = await this.userModel.findById(id).exec();
        return {
            id: user.id,
            firstName: user.firstname,
            lastName: user.lastname,
            email: user.username
        };
    }


    async userFullName (id: string) {
        const user = await this.userModel.findById(id).exec();
        return user.firstname + " " + user.lastname;

    }


}
