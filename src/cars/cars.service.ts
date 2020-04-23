import { CreateCarDto } from './dtos/car/create-car.dto';
import { UpdateCarDto } from './dtos/car/update-car.dto';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, DeleteResult, UpdateResult } from 'typeorm';
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
    return this.carsRepository.findOne(carId, { relations: ['manufacturer', 'owners'] });
  }

  findMany(): Promise<CarEntity[]> {
    return this.carsRepository.find({ relations: ['manufacturer', 'owners'] });
  }

  update(carId: number, payload: UpdateCarDto): Promise<CarEntity> {
    return this.carsRepository.save({ id: carId, ...payload });
  }

  delete(carId: number): Promise<DeleteResult> {
    return this.carsRepository.delete(carId);
  }

  deleteOutdatedOwners(): Promise<DeleteResult> {
    const now = new Date();
    const fromDate = new Date();
    const toDate = new Date();
    fromDate.setMonth(now.getMonth() - 18);
    toDate.setMonth(now.getMonth() - 12);

    return this.ownersRepository
      .createQueryBuilder('owners')
      .delete()
      .where('purchaseDate <= :fromDate')
      .setParameters({ fromDate })
      .execute();
  }

  setDiscount(discount: number): Promise<UpdateResult> {
    const now = new Date();
    const fromDate = new Date();
    const toDate = new Date();
    fromDate.setMonth(now.getMonth() - 18);
    toDate.setMonth(now.getMonth() - 12);

    return this.carsRepository
      .createQueryBuilder('cars')
      .update()
      .set({ price: () => 'price - price * :discount / 100' })
      .where('firstRegistrationDate >= :fromDate')
      .andWhere('firstRegistrationDate <= :toDate')
      .setParameters({ discount, fromDate, toDate })
      .execute();
  }
}
