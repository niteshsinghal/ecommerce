import { Injectable } from "@angular/core";
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from "@angular/router";
import { Observable } from "rxjs";
import { AuthenticationService } from "../services/authentication.service";

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthenticationService, private router: Router) {}
  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    return this.checkLoggedIn(state.url);
  }

  checkLoggedIn(url: string): boolean {
    if (this.authService.IsAuthenticated) {
      return true;
    }

    this.router.navigate(["/authentication/login"]);
    return false;
  }
}
