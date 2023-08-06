import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router, CanActivateChild } from '@angular/router';
import { Observable } from 'rxjs';
import { ToolsService } from '../service/tools.service';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard {

  constructor(
    private router: Router,
    private toolS: ToolsService ) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

      const rol: any = this.toolS.getRol();


    if (rol ==='admin') {
      return true;
    } else {
      this.router.navigate(['/home/products']);
      return false;
    }
  }

  canActivateChild(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    return this.canActivate(next, state);
  }
}
