export interface IProduct {
    id: string;
    categori?:string;
    name: string;
    price: number;
    createdAt?: Date;
}

export interface ICreateProductPayload{
    categori?:string | null;
    name:string | null;
    price:number | null;
    createdAt?: Date | null;
}