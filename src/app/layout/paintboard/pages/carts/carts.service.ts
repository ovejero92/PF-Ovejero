import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs";
import { environment } from "../../../../../environments/environment";

@Injectable({providedIn:'root'})
export class CartsService {
    constructor(private httpClient:HttpClient){}

    getCarts():Observable<any[]>{
        return this.httpClient.get<any[]>(`${environment.baseAPIURL}/carts`)
    }

    createCatrs(payload: any):Observable<any>{
        return this.httpClient.post<any>(`${environment.baseAPIURL}/carts`,payload)
    }

    deleteCarts(id:string):Observable<any>{
        return this.httpClient.delete<any>(`${environment.baseAPIURL}/carts/${id}`)
    }
}