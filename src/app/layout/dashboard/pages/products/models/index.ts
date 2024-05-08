export interface IProduct {
    id: number;
    categori?:string;
    name: string;
    price: number;
}

export interface ICreateProductPayload{
    categori?:string;
    name:string;
    price:number;
}