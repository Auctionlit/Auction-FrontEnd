import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { AboutUsComponent } from './Components/about-us/about-us.component';
import { AuctionsComponent } from './Components/auctions/auctions.component';
// import { ContactComponent } from './Components/contact/contact.component';
// import { HomeComponent } from './Components/home/home.component';
import { LoginComponent } from './Components/login/login.component';
import { RegisterComponent } from './Components/register/register.component';



const routes: Routes = [


{path:'auction',component:AuctionsComponent},


{path:'dashboard',loadChildren:()=>(import('./Modules/dashboard/dashboard.module').then((x)=>x.DashboardModule))},
{path:'',loadChildren:()=>(import('./Modules/home/home.module').then((x)=>x.HomeModule))},
{path:'account',loadChildren:()=>(import('./Modules/account/account.module').then((x)=>x.AccountModule))}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
