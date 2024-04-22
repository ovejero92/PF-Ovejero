import { Injectable } from "@angular/core";
import { IUser } from "../../layout/dashboard/pages/users/models";

@Injectable({
    providedIn: 'root'
})
export class LocalstorageService {
    constructor(){}

    set(key:string, data: IUser[]){
        try {
            localStorage.setItem(key, JSON.stringify(data));
        } catch (e) {
            console.log(e)
        }
    }
    get(Key: string ){
        try{
            // return JSON.parse(localStorage.getItem(Key));
        }catch (e) {
            console.log(e)
        }
    }
    remove(Key:string): void {
        try{
            localStorage.removeItem(Key)
        } catch (e) {
            console.error('Error removing key', e)
        }
    }
    clear(): void {
        try {
            localStorage.clear();
        } catch (e) {
            console.error('Error cleaning localstorage', e);
        }
    }
}