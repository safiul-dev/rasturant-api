import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateCustomerDto } from './customer.dto';
import { Customer } from './customer.model';

@Injectable()
export class CustomerService {
    constructor(@InjectModel("Customer") private customerModel: Model<Customer>){}

    async index () {
        const customers = await this.customerModel.find().exec();
        return customers.map((cus) => ({
            id: cus.id,
            name: cus.customer_name,
            phone: cus.customer_phone,
            address: cus.address
        }))
    }

    async create(customerDto: CreateCustomerDto) {
        const customer =await new this.customerModel(customerDto);
        await customer.save();
        return "success!";
    }

    async edit(id: string) {
        const customer = await this.customerModel.findById(id).exec();
        return {
            id: customer.id,
            name: customer.customer_name,
            phone: customer.customer_phone,
            address: customer.address
        };
    }


    async update(id: string,customerDto: CreateCustomerDto) {
        const customer = await this.customerModel.findById(id).exec();
        await customer.update(customerDto)
        return "success!";
    }


    async delete(id) {
        const customer = await this.customerModel.findByIdAndDelete(id);
        return "success!";
    }
}
