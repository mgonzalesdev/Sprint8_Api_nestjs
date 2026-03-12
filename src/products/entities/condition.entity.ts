import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('conditions')
export class ConditionEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string; 
}