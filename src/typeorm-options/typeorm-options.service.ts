import { Injectable } from '@nestjs/common';
import { TypeOrmModuleOptions, TypeOrmOptionsFactory } from '@nestjs/typeorm';
import { ConfigService } from '@nestjs/config';
import { getMetadataArgsStorage } from 'typeorm';

@Injectable()
export class TypeOrmOptionsService implements TypeOrmOptionsFactory {
    constructor(private readonly config: ConfigService) {}

    createTypeOrmOptions(connectionName?: string): Promise<TypeOrmModuleOptions> | TypeOrmModuleOptions {
        return {
            type: 'postgres',
            username: this.config.get('POSTGRES_USER'),
            password: this.config.get('POSTGRES_PASSWORD'),
            host: this.config.get('POSTGRES_HOST'),
            port: Number(this.config.get('POSTGRES_PORT')),
            database: this.config.get('POSTGRES_DB'),
            synchronize: false,
            dropSchema: false,
            logging: this.config.get('TYPEORM_LOGGING') ?? false,
            entities: getMetadataArgsStorage().tables.map(tbl => tbl.target),
            keepConnectionAlive: true,
        };
    }
}
