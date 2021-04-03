import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { FooterComponent } from './footer/footer.component';
import { HomePageComponent } from './home-page/home-page.component';
import { MenuBarComponent } from './menu-bar/menu-bar.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { LunchComponent } from './lunch/lunch.component';
import { BreakfastComponent } from './breakfast/breakfast.component';
import { DinnerComponent } from './dinner/dinner.component';
import { FavoritesListComponent } from './favorites-list/favorites-list.component';
import { ViewRecipeComponent } from './view-recipe/view-recipe.component';
import { ProfileComponent } from './profile/profile.component';


@NgModule({
  declarations: [
    AppComponent,
   // routingComponents
    AboutComponent, 
    FavoritesListComponent, 
    FooterComponent, 
    HomePageComponent,
    MenuBarComponent, 
    BreakfastComponent, 
    LunchComponent, 
    DinnerComponent, 
    ViewRecipeComponent, 
    SignupComponent, 
    LoginComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
