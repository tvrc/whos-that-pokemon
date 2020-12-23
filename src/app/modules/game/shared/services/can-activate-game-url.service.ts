import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { NavigationTokenService } from './navigation-token.service';

@Injectable()
export class CanActivateGameUrlService implements CanActivate {

  constructor(private navigationTokenService: NavigationTokenService,
              private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    const extras = this.router.getCurrentNavigation().extras;
    if (this.navigationTokenService.isNavigationTokenExists(extras)) {
      return true;
    }
    this.router.navigate(['start']);
    return false;
  }

}
