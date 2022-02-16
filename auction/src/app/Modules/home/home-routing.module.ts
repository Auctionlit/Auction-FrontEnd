import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from 'src/app/Components/about-us/about-us.component';
import { ContactComponent } from 'src/app/Components/contact/contact.component';
import { HomeComponent } from 'src/app/Components/home/home.component';

const routes: Routes = [{path:'',component:HomeComponent},
{path:'aboutus',component:AboutUsComponent},
{path:'contact',component:ContactComponent}];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
