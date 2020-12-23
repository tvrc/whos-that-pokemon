import { Injectable } from '@angular/core';

@Injectable()
export class NavigationTokenService {

  private static readonly TOKEN_PROPERTY_NAME = 'canNavigate';

  constructor() {}

  getObjectWithNavigationToken(): any {
    return { [NavigationTokenService.TOKEN_PROPERTY_NAME]: true };
  }

  isNavigationTokenExists(object: any): boolean {
    return !!object[NavigationTokenService.TOKEN_PROPERTY_NAME];
  }
}
