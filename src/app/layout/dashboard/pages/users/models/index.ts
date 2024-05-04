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