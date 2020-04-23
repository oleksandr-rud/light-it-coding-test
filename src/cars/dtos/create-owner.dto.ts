import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsDate } from 'class-validator';
import { Transform } from 'class-transformer';

export class CreateOwnerDto {
  @ApiProperty({ example: 'BMW' })
  @IsNotEmpty()
  name: string;

  @Transform(purchaseDate => new Date(purchaseDate))
  @ApiProperty({ example: new Date() })
  @IsDate()
  purchaseDate: Date;
}
