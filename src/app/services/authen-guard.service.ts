import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthenService } from './authen.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenGuardService implements CanActivate {

  constructor(private auth: AuthenService, private router: Router) { }

  canActivate(): boolean {
    if (this.auth.hasToken()) {
      return true;
    }

    this.router.navigate(['/login']);
    return false;
  }
}
