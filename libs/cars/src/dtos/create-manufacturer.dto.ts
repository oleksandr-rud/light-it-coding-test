import { ApiProperty } from "@nestjs/swagger";
import { IsInt, IsNotEmpty, IsPhoneNumber } from "class-validator";

export class CreateManufacturerDto {    
    @ApiProperty({ example: '+380661741401' })
    @IsNotEmpty()
    @IsPhoneNumber('ZZ')
    phone: string;

    @ApiProperty({ example: 112358132134 })
    @IsNotEmpty()
    @IsInt()
    siret: number;
}