export type UserRole = 'ADMIN' | 'USER'

export interface IUser{
    id: number;
    firstName:string;
    phone:number;
    email:string;
    role: UserRole;
    contra?:string;
    createdAt: Date;
}

export interface ICreateUserPayload {
    firstName:string | null;
    phone:number | null;
    email:string | null;
    role: UserRole | null;
    createdAt: Date | null;
}