import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from 'src/app/Components/about-us/about-us.component';
import { ContactComponent } from 'src/app/Components/contact/contact.component';
import { HomeComponent } from 'src/app/Components/home/home.component';
import { CarsComponent } from 'src/app/Components/items/cars/cars.component';
import { CoinsComponent } from 'src/app/Components/items/coins/coins.component';
import { JewelryComponent } from 'src/app/Components/items/jewelry/jewelry.component';
import { WatchesComponent } from 'src/app/Components/items/watches/watches.component';

const routes: Routes = [{path:'',component:HomeComponent},
{path:'aboutus',component:AboutUsComponent},
{path:'contact',component:ContactComponent},
{path:'cars',component:CarsComponent},
{path:'coins',component:CoinsComponent},
{path:'jewelry',component:JewelryComponent},
{path:'watches',component:WatchesComponent} 


];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
