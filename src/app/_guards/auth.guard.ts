import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { AuthService } from '../_services/auth.service';

@Injectable()
export class AuthGuard implements CanActivate {
    constructor(private authService: AuthService, private router: Router) {}

    canActivate(): Observable<boolean> | Promise<boolean> | boolean {
        if (this.authService.userIsLoggedIn()) {
            return true;
        }
        this.router.navigateByUrl('/login');
    }
}
