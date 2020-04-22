import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CarsService } from './cars.service';
import { CarEntity } from './entities/car.entity';
import { ManufacturerEntity } from './entities/manufacturer.entity';
import { OwnerEntity } from './entities/owner.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      CarEntity,
      ManufacturerEntity,
      OwnerEntity
    ])
  ],
  providers: [CarsService],
  exports: [CarsService]
})
export class CarsModule {}
