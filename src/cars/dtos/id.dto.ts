import { EntityWithId } from './../interfaces/entity-with-id.interface';
import { IsInt, IsNotEmpty, IsNumber, Min } from 'class-validator';
import { Transform } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';

export class IdDto implements EntityWithId {
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
