import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity({ name: 'manufacturers' })
export class ManufacturerEntity {
    @PrimaryGeneratedColumn('increment')
    id: string;

    @Column({ type: 'varchar' })
    name: string;
    
    @Column({ type: 'varchar' })
    phone: string;

    @Column({ type: 'int' })
    siret: number;
}