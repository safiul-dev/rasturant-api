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
                id: subPricing.id,
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


    async update(id: string,subPricingDto: CreateSubPricingDto) {
        try {
            await this.subPricingModel.findByIdAndUpdate(id, subPricingDto).exec()
            return {message: "success!"};
        } catch (error) {
            throw new NotFoundException();
        }
    }


    async delete(id) {
        try {
            const subPricing = await this.subPricingModel.findByIdAndDelete(id);
            return {message: "subPricing Deleted!"};
        } catch (error) {
            throw new NotFoundException();
        }
    }
}
