import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Roll } from "./Roll.entity";

@Entity()
export class User {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    firstName: string;

    @Column()
    lastName: string;

    @Column()
    password: string;

    @Column({default: true})
    isActive: boolean;

    @Column()
    email: string;

    @Column()
    address: string;

    @Column()
    createdAt: Date;

    @OneToOne(()=>Roll)
    @JoinColumn()
    rollId: Roll
}