import {Clarity} from '../entity/clarity';
import {Color} from '../entity/color';
import {Cut} from '../entity/cut';
import {CaratWeight} from '../entity/carat-weight';
import {Forms} from '../entity/form';


interface IDiamond {
    weight: string,
    cut: string,
    color: string
    clarity: string
    form: string
    price?: number
}

interface IEntity {
    entity: Function,
    clarity?: {}
    color_type?: {}
    cut_type?: {}
    weight?: {}
    form_type?: {}
}

interface IPrice {
    status: string,
    data: { [k: string]: number }
}

type NotFound = {
    status: string,
    data: {
        message: string
    }
}
type ResourceFound = {
    status: string,
    data: string[] | {message: string} | {price: number}
}

type SuccessResp = {
    status: string,
    data: {}
}

interface SuccessSimilarResp extends SuccessResp {
    data: string[] | {message: string}

}
type EnumTypes = {
    status: string
    clarity: Clarity;
    color: Color;
    cut: Cut;
    weight: CaratWeight;
    form: Forms
}


export {IDiamond, ResourceFound, IEntity, IPrice, EnumTypes, NotFound, SuccessSimilarResp}
