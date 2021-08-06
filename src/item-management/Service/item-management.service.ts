import { Injectable, NotFoundException, UnprocessableEntityException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { SubPricingService } from 'src/sub-item-pricing/Service/sub-item.service';
import { CreateItemDto } from '../Model-Schema/item.dto';
import { Item } from '../Model-Schema/item.model';

@Injectable()
export class ItemManagementService {
    constructor ( @InjectModel("Item") private itemModel: Model<Item>, private readonly subPricingService: SubPricingService) {}

    async index (): Promise<Item | any> {
        try {
            const items = await this.itemModel.find().exec();
            return items.map((item) => ({
                uniq: item.uniq,
                userId: item.userId,
                title: item.title,
                description: item.description,
                price: item.price,
                categoryUniq: item.categoryUniq,
                active: item.active,
            }));
        } catch (error) {
            throw new NotFoundException()
        }
        
    }

    async create(itemDto: CreateItemDto): Promise<{}> {

        try {
            const item =await new this.itemModel(itemDto);
            await item.save();
            return {message: "item Created!"};
        } catch (error) {
            throw new UnprocessableEntityException();       
        }
        
    }

    async edit(id: string): Promise<Item|any> {

        try {
            const item = await this.itemModel.findById(id).exec();
            return {
                uniq: item.uniq,
                userId: item.userId,
                title: item.title,
                description: item.description,
                price: item.price,
                categoryUniq: item.categoryUniq,
                active: item.active,
            };
        } catch (error) {
            throw new NotFoundException();
        }
        
    }


    async update(id: string, itemDto: CreateItemDto): Promise<{}> {
        try {
            await this.itemModel.findOneAndUpdate({uniq: id}, itemDto).exec()
            return {message: "success!"};
        } catch (error) {
            throw new NotFoundException();
        }
    }


    async delete(id) {
        try {
            await this.itemModel.findOneAndUpdate({uniq: id});
            const subitem = await this.subPricingService.deleteSubPricingWithItem(id)
            return subitem+'Also Item Delete';
        } catch (error) {
            throw new NotFoundException();
        }
    }
}
