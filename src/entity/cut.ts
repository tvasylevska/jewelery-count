import {Entity, Column, PrimaryGeneratedColumn, OneToOne, JoinColumn} from 'typeorm';
import Price from './price';

enum CutType {
    A = 'Prefect',
    B = 'Excellent',
    C = 'Good',
    D = 'Satisfactory',
    F = 'Low Quality'
}

@Entity('cut')
export class Cut {

    @PrimaryGeneratedColumn()
    id: number

    @Column({
        type: 'varchar',
        length: 14
    })
    cut_type: string

    @OneToOne(() => Price)
    @JoinColumn()
    price: Price
}
