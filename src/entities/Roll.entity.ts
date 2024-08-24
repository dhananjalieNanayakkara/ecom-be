import { Rolls } from "src/enums/rolls.enum";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Roll {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: Rolls
}