import { Entity, PrimaryGeneratedColumn, Column, JoinColumn, ManyToOne } from 'typeorm';
import { CarEntity } from './car.entity';

@Entity({ name: 'owners' })
export class OwnerEntity {
    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column({ type: 'varchar' })
    name: string;

    @ManyToOne(() => CarEntity, car => car.owners, { onDelete: 'CASCADE' })
    @JoinColumn()
    car: CarEntity;

    @Column({ type: 'timestamp' })
    purchaseDate: Date;
}
