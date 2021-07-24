import { Body, Controller, Delete, Get, Param, Post, Put, UseGuards, UsePipes, ValidationPipe } from '@nestjs/common';
import { CurrentUser } from 'src/auth/Custome-Decoreator/user.decorator';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { User } from 'src/users/Model/users.model';
import { CreateCategoryDto } from '../Model-Schema/category.dto';
import { CategoryManagementService } from '../Service/category-management.service';

@Controller('api/category')
export class CategoryManagementController {
    
    constructor(private readonly categoryService: CategoryManagementService) {}

    @Get()
    @UseGuards(JwtAuthGuard)
    async allcategory() {
        const categorys = await this.categoryService.index();
        return categorys;
    }

    @Post()
    @UseGuards(JwtAuthGuard)
    @UsePipes(new ValidationPipe({transform: true}))
    async addcategory(@CurrentUser() user: User, @Body() categoryDto: CreateCategoryDto) {
        categoryDto.userId = user.id;
        const category = await this.categoryService.create(categoryDto);
        return category;
    }

    @Get(':id')
    @UseGuards(JwtAuthGuard)
    async getOneCategory(@Param('id') id: string) {
        const category = await this.categoryService.edit(id);
        return category;
    }

    @Put(":id")
    @UseGuards(JwtAuthGuard)
    @UsePipes(new ValidationPipe({transform: true}))
    async categoryUpdate(@Param('id') id: string, @Body() categoryDto: CreateCategoryDto) {
        const category = await this.categoryService.update( id,categoryDto);
        return category;
    }

    @Delete(':id')
    @UseGuards(JwtAuthGuard)
    async categoryDelete(@Param('id') id: string) {
        const result = await this.categoryService.delete(id);
        return result;
    }
}
