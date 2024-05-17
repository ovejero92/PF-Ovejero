// export type UserRole = 'ADMIN' | 'USER'

export interface IUser{
    id: string;
    firstName:string;
    phone:number;
    email:string;
    role: string;
    contra?:string;
    createdAt: Date;
}

export interface ICreateUserPayload {
    firstName:string | null;
    phone:number | null;
    email:string | null;
    role: string | null;
    createdAt: Date | null;
}

