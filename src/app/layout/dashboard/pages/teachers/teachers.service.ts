import { Injectable } from "@angular/core";
import { ICreateTeacherPayload, ITeacher } from "./models";
import { HttpClient } from "@angular/common/http";
import { Observable, delay } from "rxjs";
import { environment } from "../../../../../environments/environment";

@Injectable({providedIn:'root'})
export class TeachersService {
    constructor(private httpClient: HttpClient){}

    getTeachers(): Observable<ITeacher[]>{
      return this.httpClient.get<ITeacher[]>(`${environment.baseAPIURL}/teachers`).pipe(delay(1500))
    }

    createTeacher(payload: ICreateTeacherPayload): Observable<ITeacher>{
    return this.httpClient.post<ITeacher>(environment.baseAPIURL+'/teachers',payload).pipe(delay(1500))  
    }

    deleteTeacher(id: string): Observable<ITeacher>{
     return this.httpClient.delete<ITeacher>(environment.baseAPIURL+'/teachers/'+id)
    }
}