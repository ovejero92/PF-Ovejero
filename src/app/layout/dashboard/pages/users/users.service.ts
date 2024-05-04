import { Injectable, Pipe } from '@angular/core';
import { IUser } from "./models";
import { Observable, delay, of, throwError } from "rxjs";

const USER_DB: IUser[] = [
    {
        id: 1,
        firstName: 'Naruto',
        phone: 11649324,
        email: 'naru@test.com',
        role: 'ADMIN',
        createdAt: new Date(),
      },
      {
        id: 2,
        firstName: 'Sasuke',
        phone: 115934583,
        email: 'sasuke@test.com',
        role: 'USER',
        createdAt: new Date(),
      },
]

@Injectable({providedIn: 'root'})
export class UserService {
getUsers(): Observable<IUser[]>{
return of(USER_DB).pipe(delay(1500))  
/* SIMULAR UN ERROR  
return throwError(()=> new Error)
*/
}
getUserById(id:number):Observable<IUser | undefined>{
 return of(USER_DB.find((el)=> el.id === id)).pipe(delay(1500))
}
}