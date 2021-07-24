import { Body, Controller, Delete, Get, Param, Post, Put, UseGuards, UsePipes, ValidationPipe } from '@nestjs/common';
import { CurrentUser } from 'src/auth/Custome-Decoreator/user.decorator';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { User } from 'src/users/Model/users.model';
import { CreateWorkPeriodDto } from '../Dto/work-periods.dto';
import { WorkPeriodsService } from '../Service/work-periods.service';

@Controller('work-periods')
export class WorkPeriodsController {

    constructor(private readonly workPeriodService: WorkPeriodsService) {}

    @Get()
    @UseGuards(JwtAuthGuard)
    async allWorkPeriod() {
        const workPeriods = await this.workPeriodService.index();
        return workPeriods;
    }

    @Post()
    @UseGuards(JwtAuthGuard)
    @UsePipes(new ValidationPipe({transform: true}))
    async addWorkPeriod(@CurrentUser() user: User, @Body() workPeriodDto: CreateWorkPeriodDto) {
        workPeriodDto.userId = user.id;
        const workPeriod = await this.workPeriodService.create(workPeriodDto);
        return workPeriod;
    }

    @Get(':id')
    @UseGuards(JwtAuthGuard)
    async getOneWorkPeriod(@Param('id') id: string) {
        const workPeriod = await this.workPeriodService.edit(id);
        return workPeriod;
    }

    @Put(":id")
    @UseGuards(JwtAuthGuard)
    @UsePipes(new ValidationPipe({transform: true}))
    async workPeriodUpdate(@Param('id') id: string, @Body() workPeriodDto: CreateWorkPeriodDto) {
        const workPeriod = await this.workPeriodService.update( id,workPeriodDto);
        return workPeriod;
    }

    @Delete(':id')
    @UseGuards(JwtAuthGuard)
    async workPeriodDelete(@Param('id') id: string) {
        const result = await this.workPeriodService.delete(id);
        return result;
    }
}
