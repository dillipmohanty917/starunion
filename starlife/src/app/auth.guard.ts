import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './service/auth.service';
@Injectable({
  providedIn: 'root'
})
export class AuthGuard {
  
  constructor(private router: Router,private authservice:AuthService) {}
  
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if (this.authservice.isAuthenticated()) {
        return true;
      } else {
        this.router.navigate(['/login']);
        return true;
      }
  }
}
