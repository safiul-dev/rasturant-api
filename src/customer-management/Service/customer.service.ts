import { Injectable, NotFoundException, UnprocessableEntityException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateCustomerDto } from '../Model-Schema/customer.dto';
import { Customer } from '../Model-Schema/customer.model';


@Injectable()
export class CustomerService {
    constructor(@InjectModel("Customer") private customerModel: Model<Customer>){}

    async index () {
        try {
            const customers = await this.customerModel.find().exec();
            return customers.map((cus) => ({
                id: cus.id,
                uniq: cus.uniq,
                userId: cus.userId,
                name: cus.name,
                phone: cus.phone,
                email: cus.email,
                address: cus.address,
                active: cus.active,
            }));
        } catch (error) {
            throw new NotFoundException()
        }
        
    }

    async create(customerDto: CreateCustomerDto) {

        try {
            const customer =await new this.customerModel(customerDto);
            await customer.save();
            return "Customer Created!";
        } catch (error) {
            throw new UnprocessableEntityException();       
        }
        
    }

    async edit(id: string) {

        try {
            const customer = await this.customerModel.findById(id).exec();
            return {
                id: customer.id,
                uniq: customer.uniq,
                userId: customer.userId,
                name: customer.name,
                phone: customer.phone,
                email: customer.email,
                address: customer.address,
                active: customer.active,
            };
        } catch (error) {
            throw new NotFoundException();
        }
        
    }


    async update(id: string,customerDto: CreateCustomerDto) {
        try {
            const customer = await this.customerModel.findByIdAndUpdate(id, customerDto).exec()
            return "success!";
        } catch (error) {
            throw new NotFoundException();
        }
    }


    async delete(id) {
        try {
            const customer = await this.customerModel.findByIdAndDelete(id);
            return "Cutomer Deleted!";
        } catch (error) {
            throw new NotFoundException();
        }
    }
}
