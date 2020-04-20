import { ApiProperty } from "@nestjs/swagger";
import { IsInt, IsNotEmpty, IsDate } from "class-validator";

export class CreateManufacturerDto {
    @ApiProperty({ example: 'Oleksandr' })
    @IsNotEmpty()
    name: string;

    @ApiProperty({ example: '2020-04-16T18:20:21.909Z' })
    @IsDate()
    purchaseDate: Date;
}