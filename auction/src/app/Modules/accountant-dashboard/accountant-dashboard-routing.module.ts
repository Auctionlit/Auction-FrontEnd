import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PersonalProfileComponent } from 'src/app/Components/personal-profile/personal-profile.component';

const routes: Routes = [{path:'Profile',component:PersonalProfileComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccountantDashboardRoutingModule { }
