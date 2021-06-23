import { Injectable, NotFoundException, UnprocessableEntityException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { UsersService } from 'src/users/users.service';
import { CreateCategoryDto } from '../Model-Schema/category.dto';
import { Category } from '../Model-Schema/category.model';

@Injectable()
export class CategoryManagementService {

    constructor(
        @InjectModel("Category") private categoryModel: Model<Category>, 
        private userService: UsersService
        ){}

    async index () {
        try {
            const categorys = await this.categoryModel.find().exec();
            
           
            const  categoryss = await categorys.map((category) => ({
                id: category.id,
                uniq: category.uniq,
                userName: category.userId,
                parent: category.parent,
                title: category.title,
                active: category.active,
            }));
 
            return categoryss;
        } catch (error) {
            throw new NotFoundException()
        }
        
    }

    async create(categoryDto: CreateCategoryDto) {

        try {
            const category =await new this.categoryModel(categoryDto);
            await category.save();
            return "category Created!";
        } catch (error) {
            throw new UnprocessableEntityException();       
        }
        
    }

    async edit(id: string) {

        try {
            const category = await this.categoryModel.findById(id).exec();
            const user = this.getUserName(category.userId);
 
            return {
                id: category.id,
                uniq: category.uniq,
                userName: (await user).toString(),
                parent: category.parent,
                title: category.title,
                active: category.active
            };
        } catch (error) {
            throw new NotFoundException();
        }
        
    }


    async update(id: string,categoryDto: CreateCategoryDto) {
        try {
            const category = await this.categoryModel.findByIdAndUpdate(id, categoryDto).exec()
            return "success!";
        } catch (error) {
            throw new NotFoundException();
        }
    }


    async delete(id) {
        try {
            const category = await this.categoryModel.findByIdAndDelete(id);
            return "Cutomer Deleted!";
        } catch (error) {
            throw new NotFoundException();
        }
    }


    protected getUserName (id: string) {
        const user = this.userService.userFullName(id);
        return user;
    }
}
