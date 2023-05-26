export type Parent = {
    id:number;
    sender:string;
    receiver:string;
    totalAmount:number;
    totalPaidAmount:number;
}

export type Child = {
    id:number;
    paidAmount:number;
    parent:Parent;
}