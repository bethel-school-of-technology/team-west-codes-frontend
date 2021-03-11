import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { MenuBarComponent } from './menu-bar/menu-bar.component';
import { UserLogInComponent } from './user-log-in/user-log-in.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuBarComponent,
    UserLogInComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
