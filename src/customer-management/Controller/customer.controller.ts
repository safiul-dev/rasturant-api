import { Body, Controller, Delete, Get, Param, Post, Put, UseGuards, UsePipes, ValidationPipe } from '@nestjs/common';
import { CurrentUser } from 'src/auth/Custome-Decoreator/user.decorator';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { User } from 'src/users/users.model';
import { CreateCustomerDto } from '../Model-Schema/customer.dto';
import { CustomerService } from '../Service/customer.service';

@Controller('api/customer')
export class CustomerController {
    constructor(private readonly customerService: CustomerService) {}

    @Get()
    @UseGuards(JwtAuthGuard)
    async allCustomer() {
        const customers = await this.customerService.index();
        return customers;
    }

    @Post()
    @UseGuards(JwtAuthGuard)
    @UsePipes(new ValidationPipe({transform: true}))
    async addCustomer(@CurrentUser() user: User, @Body() customerDto: CreateCustomerDto) {
        customerDto.uniq = user.id + customerDto.uniq;
        customerDto.userId = user.id;
        const customer = await this.customerService.create(customerDto);
        return customer;
    }

    @Get(':id')
    @UseGuards(JwtAuthGuard)
    async getOneCustomer(@Param('id') id: string) {
        const customer = await this.customerService.edit(id);
        return customer;
    }

    @Put(":id")
    @UseGuards(JwtAuthGuard)
    @UsePipes(new ValidationPipe({transform: true}))
    async customerUpdate(@Param('id') id: string, @Body() customerDto: CreateCustomerDto) {
        const customer = await this.customerService.update( id,customerDto);
        return customer;
    }

    @Delete(':id')
    @UseGuards(JwtAuthGuard)
    async customerDelete(@Param('id') id: string) {
        const result = await this.customerService.delete(id);
        return result;
    }
}
