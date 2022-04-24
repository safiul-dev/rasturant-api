import { Injectable, NotFoundException, UnprocessableEntityException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateWorkPeriodDto } from '../Dto/work-periods.dto';
import { WorkPeriod } from '../Model/work-period.model';

@Injectable()
export class WorkPeriodsService {

    constructor(
        @InjectModel("WorkPeriod") private workPeriodService: Model<WorkPeriod>, 
        
        ){}

    async index () {
        try {
            const workPeriods = await this.workPeriodService.find().exec();
            
            const  workPeriodss = await workPeriods.map((workPeriod) => ({
                id: workPeriod.id,
                uniq: workPeriod.uniq,
                userId: workPeriod.userId,
                storeUniq: workPeriod.storeUniq,
                startedAt: workPeriod.startedAt,
                endedAt: workPeriod.endedAt,
                createdAt: workPeriod.createdAt,
            }));
 
            return workPeriodss;
        } catch (error) {
            throw new NotFoundException()
        }
        
    }

    async create(workPeriodDto: CreateWorkPeriodDto) {

        try {
            const workPeriod =await new this.workPeriodService(workPeriodDto);
            await workPeriod.save();
            return "Work Period Created!";
        } catch (error) {
            throw new UnprocessableEntityException();       
        }
        
    }

    async edit(id: string) {

        try {
            const workPeriod = await this.workPeriodService.findById(id).exec();
 
            return {
                id: workPeriod.id,
                uniq: workPeriod.uniq,
                userId: workPeriod.userId,
                storeUniq: workPeriod.storeUniq,
                startedAt: workPeriod.startedAt,
                endedAt: workPeriod.endedAt,
                createdAt: workPeriod.createdAt,
            };
        } catch (error) {
            throw new NotFoundException();
        }
        
    }


    async update(id: string,workPeriodDto: CreateWorkPeriodDto) {
        try {
            await this.workPeriodService.findByIdAndUpdate(id, workPeriodDto).exec()
            return "success!";
        } catch (error) {
            throw new NotFoundException();
        }
    }


    async delete(id) {
        try {
            const workPeriod = await this.workPeriodService.findByIdAndDelete(id);
            return "Work Period Deleted!";
        } catch (error) {
            throw new NotFoundException();
        }
    }


}
