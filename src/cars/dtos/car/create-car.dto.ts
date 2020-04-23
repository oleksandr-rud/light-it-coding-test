import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";
import { IsInt, IsDate, ValidateNested, IsOptional } from 'class-validator';
import { Transform } from 'class-transformer';
import { IdDto } from '../id.dto';

export class CreateCarDto {
    @ApiPropertyOptional()
    @IsOptional()
    @ValidateNested()
    manufacturer: IdDto;

    @ApiProperty({ example: 13370 })
    @IsInt()
    price: number;

    @Transform(firstRegistrationDate => new Date(firstRegistrationDate))
    @ApiProperty({ example: new Date() })
    @IsDate()
    firstRegistrationDate: Date;

    @ApiPropertyOptional({ example: [{ id: 1 }, { id: 2 }]})
    @IsOptional()
    @ValidateNested({ each: true })
    owners?: IdDto[];
}
