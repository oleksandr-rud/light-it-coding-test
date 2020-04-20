import { CreateCarDto } from './../../libs/cars/src/dtos/create-car.dto';
import { CarEntity } from './../../libs/cars/src/entities/car.entity';
import { Controller, Get, Post, Body, HttpCode, Param, ParseIntPipe, Put } from '@nestjs/common';
import { CarsService } from '@app/cars';
import { ApiTags, ApiResponse } from '@nestjs/swagger';

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
        description: 'Return list of all cars',
        type: [CarEntity],
    })
    list(): Promise<CarEntity[] | void> {
        return this.carsService.findMany();
    }

    @Get(':carId')
    @ApiResponse({
        status: 200,
        description: 'Car info by ID.',
        type: CarEntity,
    })
    findOne(@Param('carId', new ParseIntPipe()) carId: number): Promise<CarEntity | void> {
        return this.carsService.findById(carId);
    }

    @Put(':carId')
    @ApiResponse({
        status: 202,
        description: 'Car info by ID.',
        type: CarEntity,
    })
    update(@Param('carId', new ParseIntPipe()) carId: number, @Body() payload: CreateCarDto): Promise<CarEntity | void> {
        return this.carsService.update(carId, payload);
    }
}
