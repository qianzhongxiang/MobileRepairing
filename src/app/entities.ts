export enum Career {
    Consumer,
    Engineer,
    Manager
}
export interface User {
    id?: string;
    userName?: string;
    Password?: string;
    career?: Career;
}
export interface OrderDetails {
    id?: string;
    brand?: string;
    model?: string;
    brokenPart?: string;
}
export enum OrderStates {
    Pending,
    Processing,
    Successful,
    Canceled,
    CanceledApplying
}
export enum OrderType {
    OnStore = 1,
    Home = 2
}
export interface Order {
    id?: string;
    address?: string;
    phoneNumber?: string;
    comment?: string;
    orderState?: OrderStates;
    price?: string;
    engineers?: User[];
    detials?: OrderDetails;
    createdTime?: string;
    type?: OrderType;
    procTime?: string;
}

export interface Brands {
    id?: string;
    name?: string;
}

export interface Models {
    id?: string;
    brandsId?: string;
    name?: string;
}
