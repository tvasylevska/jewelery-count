import {Entity, Column, PrimaryGeneratedColumn, OneToMany, OneToOne, JoinColumn} from 'typeorm';
import Price from './price';

enum ColorType {
    D = 'D',
    E = 'E',
    F = 'F',
    G = 'G',
    H = 'H',
    J = 'I-J',
    KM = 'KM',
    NR = 'NR',
    SZ = 'SZ',
}

@Entity('color')
export class Color {

    @PrimaryGeneratedColumn()
    id: number

    @Column({
        type: 'varchar',
        length: 4
    })
    color_type: string

    @OneToOne(() => Price)
    @JoinColumn()
    price: Price
}
