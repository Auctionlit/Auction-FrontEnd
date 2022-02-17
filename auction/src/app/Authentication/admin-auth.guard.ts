import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router,RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class AdminAuthGuard implements CanActivate {
  constructor(private router:Router,private toaster:ToastrService){}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
     
      var roleName=localStorage.getItem('Role');
      if(roleName=='1')
           {  
              return true;
           }  
      else
           {  
              console.log("Access Denied this for Admin");
              this.toaster.warning("Access Denied this for Admin");
              this.router.navigate(['']);
              return false;
           }
  
  }
  
}
