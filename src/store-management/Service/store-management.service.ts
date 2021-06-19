import { HttpException, Injectable, NotFoundException, UnprocessableEntityException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateCustomerDto } from 'src/customer/customer.dto';
import { CreateStoreDto } from '../Model-Schema/store.dto';
import { Store } from '../Model-Schema/store.model';

@Injectable()
export class StoreManagementService {
    constructor(@InjectModel("Store") private storeModel: Model<Store>) {}

    async findStors () {
        try {
            const stores = await this.storeModel.find();
            return stores.map((store) => ({
                id: store.id,
                uniq: store.uniq,
                userId: store.userId,
                title: store.title,
                status: store.active
            }))
        } catch (error) {
            throw new NotFoundException();
            
        }


    }

    async addStore(createStoreDto: CreateStoreDto) {
  
        const store = new this.storeModel(createStoreDto);
        try {
            await store.save()
            return {
                message: "Store Created!"
            }
        } catch (error) {
            throw new UnprocessableEntityException()
            
        }
    }

    async findOne(id: string) {
        try {
            const store = await this.storeModel.findById(id).exec();
            return {
                id: store.id,
                uniq: store.uniq,
                userId: store.userId,
                title: store.title,
                active: store.active
            }
        } catch (error) {
            throw new NotFoundException();
        }
    }

    async updateStore (id: string, storeDto: CreateStoreDto) {
        try {
            const store = await this.storeModel.findByIdAndUpdate(id, storeDto);
        return "update Success";
        } catch (error) {
            throw new NotFoundException()
        }
        
    }

    async deleteStore(id: string) {
        await this.storeModel.findByIdAndDelete(id).exec();
        return {
            message: "Delete Success!"
        }
    }


    async findStoreId (userId: string): Promise<string> {
        const store = await this.storeModel.findOne({userId: userId}).exec()
        return store.id;
    }



}
