import { CartItem, ShippingInfo, User } from "./types";


export interface userReducerIntialState{
    user:User | null,
    loading:boolean
}

export interface cartReducerIntialState{
    loading:boolean,
    subtotal:number,
    total:number,
    tax:number,
    discount:number,
    shippingCharges:number,
    cartItems:CartItem[],
    shippingInfo:ShippingInfo
}