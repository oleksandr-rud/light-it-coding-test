import { ApiProperty } from "@nestjs/swagger";
import { IsInt, IsDate, ValidateNested } from 'class-validator';
import { CreateManufacturerDto } from "./create-manufacturer.dto";

export class CreateCarDto {
    @ApiProperty()
    @ValidateNested()
    manufacturer: CreateManufacturerDto;

    @ApiProperty({ example: 13370 })
    @IsInt()
    price: number;

    @ApiProperty({ example: '2020-04-16T18:20:21.909Z' })
    @IsDate()
    firstRegistrationDate: Date;
}