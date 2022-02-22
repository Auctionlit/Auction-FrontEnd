import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router,RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class UserAuthGuard implements CanActivate {
  constructor(private router:Router,private toaster:ToastrService){}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      
      var roleName=localStorage.getItem('Role');
      
      if(roleName=='2')
           {  
              return true;
           }  
      else
           {  
              console.log("Access Denied this for User");
              this.toaster.warning("Access Denied this for User");
              this.router.navigate(['']);
              return false;
           }
  
  
  }
  
}
