import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TypeOrmOptionsService } from './typeorm-options/typeorm-options.service';
import { CarsModule } from '@app/cars';

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
  controllers: [AppController],
  providers: [AppService, TypeOrmOptionsService],
})
export class AppModule {}
