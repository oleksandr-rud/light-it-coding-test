import { Controller, Get, Post, Body, HttpCode, Param, ParseIntPipe, Put, Delete, HttpException, HttpStatus } from '@nestjs/common';
import { ApiTags, ApiResponse } from '@nestjs/swagger';
import { DeleteResult, UpdateResult } from 'typeorm';
import { CarsService } from './cars.service';
import { CarEntity } from './entities/car.entity';
import { CreateCarDto } from './dtos/create-car.dto';


@ApiTags('Cars')
@Controller('cars')
export class CarsController {
    constructor(
        private readonly carsService: CarsService,
    ) {}

    @Post('')
    @HttpCode(201)
    @ApiResponse({
        status: 201,
        description: 'Create new car.',
        type: CarEntity,
    })
    create(@Body() payload: CreateCarDto): Promise<CarEntity | void> {
        return this.carsService.create(payload);
    }

    @Get('')
    @ApiResponse({
        status: 200,
        description: 'Return list of all cars.',
        isArray: true,
        type: CarEntity,
    })
    findMany(): Promise<CarEntity[] | void> {
        return this.carsService.findMany();
    }

    @Get(':carId')
    @ApiResponse({
        status: 200,
        description: 'Return car data by ID.',
        type: CarEntity,
    })
    findOne(@Param('carId', new ParseIntPipe()) carId: number): Promise<CarEntity | void> {
        return this.carsService.findById(carId);
    }

    @Put(':carId')
    @HttpCode(202)
    @ApiResponse({
        status: 202,
        description: 'Update car data by ID.',
        type: CarEntity,
    })
    update(@Param('carId', new ParseIntPipe()) carId: number, @Body() payload: CreateCarDto): Promise<CarEntity | UpdateResult> {
        return this.carsService.update(carId, payload);
    }

    @Delete(':carId')
    @HttpCode(204)
    @ApiResponse({
        status: 204,
        description: 'Delete car data by ID.',
        type: CarEntity,
    })
    delete(@Param('carId', new ParseIntPipe()) carId: number): Promise<CarEntity | DeleteResult> {
        return this.carsService.delete(carId);
    }

    @Post('trigger-events')
    @HttpCode(200)
    @ApiResponse({
        status: 200,
        description: 'Delete outdated owners and set discount to cars.',
    })
    async triggerEvents(): Promise<object> {
        try {
            await this.carsService.setDiscount(20);
            await this.carsService.deleteOutdatedOwners();
            return { status: 'ok' };
        } catch (e) {
            throw new HttpException(e, HttpStatus.BAD_REQUEST);
        }
    }
}
