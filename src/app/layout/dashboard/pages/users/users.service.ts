import { Injectable, Pipe } from '@angular/core';
import { ICreateUserPayload, IUser } from "./models";
import { Observable, delay, of, throwError } from "rxjs";
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../../environments/environment';


@Injectable({providedIn: 'root'})
export class UserService {

  constructor(private httpClient: HttpClient){
  }
  getUsers(): Observable<IUser[]>{
    
    return this.httpClient.get<IUser[]>(environment.baseAPIURL+'/users').pipe(delay(1500))
    //return of(USER_DB)  
/* SIMULAR UN ERROR  
return throwError(()=> new Error)
*/
}
getUserById(id:string):Observable<IUser | undefined>{
  return this.httpClient.get<IUser>(`${environment.baseAPIURL}/users/${id}`).pipe(delay(1500))
  //return of(USER_DB.find((el)=> el.id === id)).pipe(delay(1500))
}

createUser(payload: ICreateUserPayload): Observable<IUser>{
  return this.httpClient.post<IUser>(`${environment.baseAPIURL}/users`, payload)
}

deleteUser(id:string): Observable<IUser | undefined> {
  return this.httpClient.delete<IUser>(`${environment.baseAPIURL}/users/${id}`).pipe(delay(1500))
}


}