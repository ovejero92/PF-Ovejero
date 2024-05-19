type Teacher = 'TEACHER'
export interface ITeacher {
   id:string;
   firstName:string;
   lastName:string;
   phone:number;
   email:string;
   tecnologi: string;
   role:Teacher;
   createdAt?: Date ;
}
export interface ICreateTeacherPayload {
    firstName:string | null;
    lastName:string | null;
    phone:number | null;
    email:string | null;
    tecnologi: string | null;
    role?:string | null;
    createdAt?: Date;
}