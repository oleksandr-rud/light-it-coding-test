import { ApiProperty } from "@nestjs/swagger";
import { IsInt, IsDate, ValidateNested } from 'class-validator';
import { CreateManufacturerDto } from "./create-manufacturer.dto";
import { Transform } from 'class-transformer';
import { IdDto } from './id.dto';

export class CreateCarDto {
    @ApiProperty()
    @ValidateNested()
    manufacturer: IdDto;

    @ApiProperty({ example: 13370 })
    @IsInt()
    price: number;

    @Transform(firstRegistrationDate => new Date(firstRegistrationDate))
    @ApiProperty({ example: new Date() })
    @IsDate()
    firstRegistrationDate: Date;
}
