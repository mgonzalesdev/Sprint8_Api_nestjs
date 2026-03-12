import { Column, PrimaryGeneratedColumn } from "typeorm";
import { Entity } from "typeorm";

@Entity('statuses')
export class StatusEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ unique: true })
    name: string; 
}