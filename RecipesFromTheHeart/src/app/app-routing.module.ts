import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { BreakfastComponent } from './breakfast/breakfast.component';
import { DinnerComponent } from './dinner/dinner.component';
import { FavoritesListComponent } from './favorites-list/favorites-list.component';
import { FooterComponent } from './footer/footer.component';
import { HomePageComponent } from './home-page/home-page.component';
import { LoginComponent } from './login/login.component';
import { LunchComponent } from './lunch/lunch.component';
import { MenuBarComponent } from './menu-bar/menu-bar.component';
import { ProfileComponent } from './profile/profile.component';
import { SignupComponent } from './signup/signup.component';
import { ViewRecipeComponent } from './view-recipe/view-recipe.component';


const routes: Routes = [
  { path: 'about', component: AboutComponent},
  { path: 'breakfast', component: BreakfastComponent},
  { path: 'lunch', component: LunchComponent},
  { path: 'dinner', component: DinnerComponent},
  { path: 'favoriteslist', component: FavoritesListComponent},
  { path: 'footer', component: FooterComponent},
  { path: 'homepage', component: HomePageComponent },
  { path: '', redirectTo: "/homepage", pathMatch:"full"},
  { path: 'menubar', component: MenuBarComponent },
  { path: 'login', component: LoginComponent },
  { path: 'viewrecipe', component: ViewRecipeComponent},
  { path: 'signup', component: SignupComponent },
  { path: 'profile', component: ProfileComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

// export const routingComponents = [
  
// ]
