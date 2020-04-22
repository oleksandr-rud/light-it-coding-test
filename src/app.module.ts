import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TypeOrmOptionsService } from './typeorm-options/typeorm-options.service';
import { CarsController } from './cars/cars.controller';
import { CarsModule } from './cars/cars.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRootAsync({
      useClass: TypeOrmOptionsService,
    }),
    CarsModule,
  ],
  controllers: [CarsController],
  providers: [TypeOrmOptionsService],
})
export class AppModule {}
