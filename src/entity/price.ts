import {Column, Entity, JoinColumn, ManyToOne, OneToOne, PrimaryGeneratedColumn} from 'typeorm';
import {CaratWeight} from './carat-weight';
import {Clarity} from './clarity';
import {Cut} from './cut';
import {Color} from './color';
import {Forms} from './form';

@Entity('price')
export default class Price {
    @PrimaryGeneratedColumn()
    id: number

    @Column({
        type: 'numeric',
        default: 0
    })
    price: number

    @OneToOne(() => CaratWeight, weight => weight.price)
    price_by_weight: number

    @OneToOne(() => Clarity, clear => clear.price)
    price_by_clarity: number

    @OneToOne(() => Cut, cut => cut.price)
    price_by_cut: number

    @OneToOne(() => Color, color => color.price)
    price_by_color: number

    @OneToOne(() => Forms, form => form.form_type)
    price_by_form: number
}
