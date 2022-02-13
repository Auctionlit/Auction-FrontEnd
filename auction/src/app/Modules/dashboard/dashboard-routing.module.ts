import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountantDashboardComponent } from 'src/app/Components/accountant-dashboard/accountant-dashboard.component';
import { AdminDashboardComponent } from 'src/app/Components/admin-dashboard/admin-dashboard.component';
import { UserDashboardComponent } from 'src/app/Components/user-dashboard/user-dashboard.component';

const routes: Routes = [{path:'Admin',component:AdminDashboardComponent},
{path:'Accountant',component:AccountantDashboardComponent},
{path:'User',component:UserDashboardComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
