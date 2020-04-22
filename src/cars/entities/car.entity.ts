import { Entity, PrimaryGeneratedColumn, Column, OneToMany, OneToOne, JoinColumn, ManyToOne } from 'typeorm';
import { OwnerEntity } from './owner.entity';
import { ManufacturerEntity } from './manufacturer.entity';

@Entity({ name: 'cars' })
export class CarEntity {
    @PrimaryGeneratedColumn('increment')
    id: string;

    @ManyToOne(() => ManufacturerEntity, {
        cascade: true, nullable: true
    })
    @JoinColumn()
    manufacturer: ManufacturerEntity;

    @Column({ type: 'int' })
    price: number;

    @OneToMany(() => OwnerEntity, owners => owners.car, {
        cascade: true, nullable: true
    })
    owners: OwnerEntity[];

    @Column({ type: 'timestamp' })
    firstRegistrationDate: Date;
}
