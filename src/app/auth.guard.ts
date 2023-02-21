import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  x: boolean = false;

  canActivate(): boolean | Observable<boolean> | Promise<boolean> {
    this.x = !this.x;
    if(this.x === false){
      alert("can't navigate");
    }
    return this.x;
  }
  
}
