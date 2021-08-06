import { Injectable, NotFoundException, UnprocessableEntityException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateSubPricingDto } from '../Model-Schema/sub-pricing.dto';
import { SubPricing } from '../Model-Schema/sub-pricing.model';

@Injectable()
export class SubPricingService {
    constructor ( @InjectModel("SubPricing") private subPricingModel: Model<SubPricing>) {}

    async index () {
        try {
            const subPricings = await this.subPricingModel.find().exec();
            return subPricings.map((subPricing) => ({
                
                uniq: subPricing.uniq,
                title: subPricing.title,
                description: subPricing.description,
                ratio: subPricing.ratio,
                itemUniq: subPricing.itemUniq,
                price: subPricing.price,
                
            }));
        } catch (error) {
            throw new NotFoundException()
        }
        
    }

    async getAllByItem (itemUniq: string) {
        
        try {
            const subItems = await this.subPricingModel.find({itemUniq: itemUniq}).exec();
            return subItems.map( item => ({ 
                
                uniq: item.uniq,
                title: item.title,
                description: item.description,
                ratio: item.ratio,
                itemUniq: item.itemUniq,
                price: item.price,
                
            }))
        } catch (error) {
            throw new NotFoundException();
        }
    }

    async create(subPricingDto: CreateSubPricingDto) {

        try {
            const subPricing =await new this.subPricingModel(subPricingDto);
            await subPricing.save();
            return {message: "subPricing Created!"};
        } catch (error) {
            throw new UnprocessableEntityException();       
        }
        
    }

    async edit(id: string) {

        try {
            const subPricing = await this.subPricingModel.findById(id).exec();
            return {
                id: subPricing.id,
                uniq: subPricing.uniq,
                title: subPricing.title,
                description: subPricing.description,
                ratio: subPricing.ratio,
                itemUniq: subPricing.itemUniq,
                price: subPricing.price,
            };
        } catch (error) {
            throw new NotFoundException();
        }
        
    }


    async update(id: string,subPricingDto: CreateSubPricingDto){
        try {
            await this.subPricingModel.findOneAndUpdate({uniq: id}, subPricingDto).exec();
           
            return {message: "success!"};
        } catch (error) {
            throw new NotFoundException();
        }
    }


    async delete(id) {
        try {
            await this.subPricingModel.findOneAndDelete({uniq: id}).exec();
            return {message: "subPricing Deleted!"};
        } catch (error) {
            throw new NotFoundException();
        }
    }

    public async deleteSubPricingWithItem (itemUniq: string): Promise<any> {
        try {
             var items: any[] = []
            const subItem = await this.getAllByItem(itemUniq);
            if (subItem.length > 0) {
                subItem.map((item, index) => items[index] = item.uniq)
            }
            for (let i = 0; i < items.length; i++) {
                await this.delete(items[i]);
            }
            return 'sub Item Delete';
            
        } catch (error) {
            throw new NotFoundException();
        }
    }
}
