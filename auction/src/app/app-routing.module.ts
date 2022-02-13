import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './Components/about-us/about-us.component';
import { AuctionsComponent } from './Components/auctions/auctions.component';
import { ContactComponent } from './Components/contact/contact.component';
import { HomeComponent } from './Components/home/home.component';
import { LoginComponent } from './Components/login/login.component';
import { RegisterComponent } from './Components/register/register.component';

const routes: Routes = [{path:'',component:HomeComponent},
{path:'aboutus',component:AboutUsComponent},{path:'auction',component:AuctionsComponent},
{path:'contact',component:ContactComponent},{path:'login',component:LoginComponent},
{path:'register',component:RegisterComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
