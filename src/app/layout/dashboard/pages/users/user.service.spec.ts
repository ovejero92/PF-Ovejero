import { TestBed } from "@angular/core/testing"
import { UserService } from "./users.service"
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import { environment } from "../../../../../environments/environment";
import { ICreateUserPayload, IUser } from "./models";

describe('UserService', ()=>{
    let userService : UserService;
    let httpTestingController: HttpTestingController;
    beforeEach(() => {
    TestBed.configureTestingModule({
        providers:[UserService],
        imports: [ HttpClientTestingModule]
    });
    userService = TestBed.inject(UserService);
    httpTestingController = TestBed.inject(HttpTestingController)
    });

    it('getUsers debe realizar una peticion GET a {apiUrl}/users', () => {
        
        userService.getUsers().subscribe({
            next: (resp) => {
                expect(Array.isArray(resp)).toBeTrue();
            }
        })

        httpTestingController.expectOne({
            method:'GET',
            url: environment.baseAPIURL+'/users'
        }).flush([])
    });

    it('CreateUser debe ejecutar POST a {apiUrl}/users',() => {
        const payload : ICreateUserPayload = {
            createdAt: new Date(),
            email:'some@mail.com',
            firstName:'Test',
            phone:1213213123,
            role:'ADMIN'
        }
        const mockResp: IUser = {
            createdAt: new Date(),
            email:'some@mail.com',
            firstName:'Test',
            phone:1213213123,
            role:'ADMIN',
            id:'123'
        }
        userService.createUser(payload).subscribe((resp) => {
            expect(resp).toEqual(mockResp)
        })

        httpTestingController.expectOne({
            method:'POST',
            url: `${environment.baseAPIURL}/users`
        }).flush(mockResp)
    })
})