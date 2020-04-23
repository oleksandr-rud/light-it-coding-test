import { EntityWithId } from './../interfaces/entity-with-id.interface';
import { Entity, PrimaryGeneratedColumn, Column, JoinColumn, ManyToOne, ManyToMany } from 'typeorm';
import { CarEntity } from './car.entity';

@Entity({ name: 'owners' })
export class OwnerEntity implements EntityWithId {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column({ type: 'varchar' })
  name: string;

  @Column({ type: 'timestamp' })
  purchaseDate: Date;
}
