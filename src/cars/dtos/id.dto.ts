import { IsInt, IsNotEmpty, IsNumber, Min } from 'class-validator';
import { Transform } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';
import { ManufacturerEntity } from '../entities/manufacturer.entity';

export class IdDto implements Partial<ManufacturerEntity>{
    @ApiProperty()
    @Transform(id => Number(id))
    @IsNotEmpty()
    @IsNumber({
        allowNaN: false,
        allowInfinity: false,
    })
    @IsInt()
    @Min(1)
    id: number;
}
