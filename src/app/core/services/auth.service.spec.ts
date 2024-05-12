import { TestBed } from "@angular/core/testing"
import { AuthService } from "./auth.service"
import { Router } from "@angular/router";
import {MockProvider} from 'ng-mocks'

describe('authService',() => {
    let authService: AuthService;
    let router:Router;

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers:[AuthService,MockProvider(Router)]
        })

        authService = TestBed.inject(AuthService)
        router = TestBed.inject(Router)
    });

    it('Debe estableser un usuario autenticado al llamar login',() => {
    const spyOnSetItem = spyOn(localStorage,'setItem')
    const spyOnNavigate =spyOn(router, 'navigate')
    authService.login({
        email: 'ovejero.gustavo92@gmail.com',
        contra: 'Cyg190921'
    });
    authService.authUser$.subscribe({
        next: (authUser) => {
        // to be truty comprueba que no sea null undefained o false
        expect(authUser).toBeTruthy();
        expect(spyOnSetItem).toHaveBeenCalled();
        expect(spyOnNavigate).toHaveBeenCalled();
        }
    })
    })

    it('Debe mostrar una alerta si los datos no coinciden con los datos del usuario ',() => {
        const spyOnAlert = spyOn(window, 'alert')
        authService.login({
            email:'fake@gmail.com',
            contra: 'Fake123'
        });
        expect(spyOnAlert).toHaveBeenCalled();
    })

})