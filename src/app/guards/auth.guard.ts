import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../service/auth.service';
import { ToolsService } from '../service/tools.service';


@Injectable({
  providedIn: 'root'
})
export class authGuard implements CanActivate {

  constructor(
    private router: Router,
    private authS: AuthService,
    private toolS: ToolsService
    ) {}

    tokenGet:any = this.toolS.getToken();

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    // Verificar si el token del usuario es válido y existe en el servicio de autenticación.
    const isTokenValid = this.toolS.validarToken(this.tokenGet);

    if (this.tokenGet) {
      return true; // El token es válido, permitir el acceso.
    } else {
      // El token no es válido o no existe, redirigir al usuario a la página de inicio de sesión.
      this.router.navigate(['/login']);
      return false;
    }
  }

    canActivateChild(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    return this.canActivate(next, state);
  }
}
