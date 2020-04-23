import { ApiPropertyOptional } from "@nestjs/swagger";
import { IsInt, IsDate, ValidateNested, IsOptional } from 'class-validator';
import { Transform } from 'class-transformer';
import { IdDto } from '../id.dto';

export class UpdateCarDto {
    @ApiPropertyOptional()
    @IsOptional()
    @ValidateNested()
    manufacturer?: IdDto;

    @ApiPropertyOptional({ example: 13370 })
    @IsOptional()
    @IsInt()
    price?: number;

    @Transform(firstRegistrationDate => new Date(firstRegistrationDate))
    @ApiPropertyOptional({ example: new Date() })
    @IsOptional()
    @IsDate()
    firstRegistrationDate?: Date;

    @ApiPropertyOptional({ example: [{ id: 1 }, { id: 2 }]})
    @IsOptional()
    @ValidateNested({ each: true })
    owners?: IdDto[];
}
