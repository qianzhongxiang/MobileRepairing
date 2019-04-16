export enum Career {
    Consumer,
    Engineer,
    Manager
}
export interface User {
    Id?: string;
    UserName?: string;
    Password?: string;
    Career?: Career;
}
export interface OrderDetails {
    Id?: string;
    Brand?: string;
    model?: string;
    BrokenPart?: string;
}
export enum OrderStates {
    Pending,
    Processing,
    Successful,
    Canceled,
    CanceledApplying
}
export enum OrderType {
    OnStore,
    Home
}
export interface Order {
    Id?: string;
    Address?: string;
    PhoneNumber?: string;
    Comment?: string;
    OrderState?: OrderStates;
    Price?: string;
    Engineers?: User[];
    Detials?: OrderDetails;
    CreatedTime?: string;
    Type?: OrderType;
}
