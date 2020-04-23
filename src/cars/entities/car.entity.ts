import { EntityWithId } from './../interfaces/entity-with-id.interface';
import { Entity, PrimaryGeneratedColumn, Column, OneToMany, OneToOne, JoinColumn, ManyToOne, ManyToMany, JoinTable } from 'typeorm';
import { OwnerEntity } from './owner.entity';
import { ManufacturerEntity } from './manufacturer.entity';

@Entity({ name: 'cars' })
export class CarEntity implements EntityWithId {
    @PrimaryGeneratedColumn('increment')
    id: number;

    @ManyToOne(() => ManufacturerEntity, {
        cascade: true, nullable: true
    })
    @JoinColumn()
    manufacturer: ManufacturerEntity;

    @Column({ type: 'int' })
    price: number;

    @ManyToMany(() => OwnerEntity, {
        cascade: true, nullable: true
    })
    @JoinTable()
    owners: OwnerEntity[];

    @Column({ type: 'timestamp' })
    firstRegistrationDate: Date;
}
