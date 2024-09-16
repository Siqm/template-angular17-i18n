import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RouteGuard implements CanActivate {
  private allowedRoutes: string[] = ['teste', 'allowed-route2']; // adicione suas rotas permitidas aqui

  constructor(private router: Router) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    const requestedRoute = route.url[0]?.path; // obtém a parte da rota solicitada
    console.log('requestedRoute', requestedRoute);

    if (this.allowedRoutes.includes(requestedRoute)) {
      return true; // a rota é permitida, permita o acesso
    }

    this.router.navigate(['/not-found']); // redireciona para a página de erro
    return false; // impede o acesso
  }
}
