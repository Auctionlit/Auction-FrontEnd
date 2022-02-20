import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountantAuthGuard } from 'src/app/Authentication/accountant-auth.guard';
import { AdminAuthGuard } from 'src/app/Authentication/admin-auth.guard';
import { UserAuthGuard } from 'src/app/Authentication/user-auth.guard';
import { AccountantDashboardComponent } from 'src/app/Components/accountant-dashboard/accountant-dashboard.component';
import { AdminDashboardComponent } from 'src/app/Components/admin-dashboard/admin-dashboard.component';
import { UserDashboardComponent } from 'src/app/Components/user-dashboard/user-dashboard.component';


const routes: Routes = [{path:'Admin',component:AdminDashboardComponent,canActivate:[AdminAuthGuard]},
{path:'Accountant',component:AccountantDashboardComponent,canActivate:[AccountantAuthGuard]},
{path:'User',component:UserDashboardComponent,canActivate:[UserAuthGuard]}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
