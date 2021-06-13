import { Body, Controller, Delete, Get, Param, Post, Put, UsePipes, ValidationPipe } from '@nestjs/common';
import { CreateCustomerDto } from './customer.dto';
import { CustomerService } from './customer.service';

@Controller('customer')
export class CustomerController {
    constructor(private readonly customerService: CustomerService) {}

    @Get()
    async allCustomer() {
        const customers = await this.customerService.index();
        return customers;
    }

    @Post()
    @UsePipes(new ValidationPipe({transform: true}))
    async addCustomer(@Body() customerDto: CreateCustomerDto) {
        const customer = await this.customerService.create(customerDto);
        return customer;
    }

    @Get(':id')
    async getOneCustomer(@Param('id') id: string) {
        const customer = await this.customerService.edit(id);
        return customer;
    }

    @Put(":id")
    @UsePipes(new ValidationPipe({transform: true}))
    async customerUpdate( @Param('id') id: string, @Body() customerDto: CreateCustomerDto) {
        const customer = await this.customerService.update( id,customerDto);
        return customer;
    }

    @Delete(':id')
    async customerDelete(@Param('id') id: string) {
        const result = await this.customerService.delete(id);
        return result;
    }
}
