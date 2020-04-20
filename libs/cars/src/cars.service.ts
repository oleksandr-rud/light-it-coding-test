import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, DeleteResult, UpdateResult } from 'typeorm';
import { CreateCarDto } from './dtos/create-car.dto';
import { OwnerEntity } from './entities/owner.entity';
import { ManufacturerEntity } from './entities/manufacturer.entity';
import { CarEntity } from './entities/car.entity';

@Injectable()
export class CarsService {
    constructor(
        @InjectRepository(CarEntity)
        private readonly carsRepository: Repository<CarEntity>,
        @InjectRepository(ManufacturerEntity)
        private readonly manufacturersRepository: Repository<ManufacturerEntity>,
        @InjectRepository(OwnerEntity)
        private readonly ownersRepository: Repository<OwnerEntity>,
    ) {}

    create(payload: CreateCarDto): Promise<CarEntity> {
        return this.carsRepository.save(payload);
    }

    findById(carId: number): Promise<CarEntity> {
        return this.carsRepository.findOne(carId);
    }

    findMany(): Promise<CarEntity[]> {
        return this.carsRepository.find();
    }

    update(carId: number, payload: CreateCarDto): Promise<UpdateResult> {
        return this.carsRepository.update(carId, payload);
    }

    delete(carId: number): Promise<DeleteResult> {
        return this.carsRepository.delete(carId);
    }
}
