import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { EntityWithId } from '../interfaces/entity-with-id.interface';

@Entity({ name: 'manufacturers' })
export class ManufacturerEntity implements EntityWithId {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column({ type: 'varchar' })
  name: string;

  @Column({ type: 'varchar' })
  phone: string;

  @Column({ type: 'int' })
  siret: number;
}
