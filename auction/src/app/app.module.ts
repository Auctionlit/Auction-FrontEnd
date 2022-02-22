import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './Components/home/home.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { BsDropdownModule} from 'ngx-bootstrap/dropdown';
import { FooterComponent } from './Components/footer/footer.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CarouselComponent } from './Components/carousel/carousel.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './Components/login/login.component';
import { RegisterComponent } from './Components/register/register.component';
import { AuctionsComponent } from './Components/auctions/auctions.component';
import { AboutUsComponent } from './Components/about-us/about-us.component';
import { ContactComponent } from './Components/contact/contact.component';
import { CardsSliderComponent } from './Components/cards-slider/cards-slider.component';
import { OwlModule } from 'ngx-owl-carousel';
import { AdminDashboardComponent } from './Components/admin-dashboard/admin-dashboard.component';
import { UserDashboardComponent } from './Components/user-dashboard/user-dashboard.component';
import { AccountantDashboardComponent } from './Components/accountant-dashboard/accountant-dashboard.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import { PersonalProfileComponent } from './Components/personal-profile/personal-profile.component';
import { InsertItemComponent } from './Components/insert-item/insert-item.component';
import { InsertItemFormDialogComponent } from './Components/insert-item-form-dialog/insert-item-form-dialog.component';
import { MAT_DIALOG_DEFAULT_OPTIONS } from '@angular/material/dialog';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    FooterComponent,
    CarouselComponent,
    LoginComponent,
    RegisterComponent,
    AuctionsComponent,
    AboutUsComponent,
    ContactComponent,
    CardsSliderComponent,
    AdminDashboardComponent,
    UserDashboardComponent,
    AccountantDashboardComponent,
    PersonalProfileComponent,
    InsertItemComponent,
    InsertItemFormDialogComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BsDropdownModule,
    NgbModule,
    BrowserAnimationsModule,
    OwlModule,
    CarouselModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatDialogModule,
    ToastrModule.forRoot({timeOut:2000,progressAnimation:"increasing"})
    
    
  
  ],
  providers: [{provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: {hasBackdrop: false}}],
  bootstrap: [AppComponent]
})
export class AppModule { }
