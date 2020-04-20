import { Entity, PrimaryGeneratedColumn, Column, OneToMany, OneToOne } from "typeorm";
import { OwnerEntity } from './owner.entity';
import { ManufacturerEntity } from './manufacturer.entity';

@Entity({ name: 'cars' })
export class CarEntity {
    @PrimaryGeneratedColumn('increment')
    id: string;

    @OneToOne(() => ManufacturerEntity)
    manufacturer: ManufacturerEntity;
    
    @Column({ type: 'int' })
    price: number;

    @OneToMany(() => OwnerEntity, owners => owners.car)
    owners: OwnerEntity[];

    @Column({ type: 'timestamp' })
    firstRegistrationDate: Date;
}