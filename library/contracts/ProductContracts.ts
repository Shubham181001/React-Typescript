export default interface ProductContract{
    Name:string;
    Price:number;
    Qty:number;
    Total():number;
    Print():void;
}

export interface CategoryContract{
    CategoryName:string;
}