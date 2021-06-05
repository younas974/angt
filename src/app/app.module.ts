import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserinfoComponent } from './components/userinfo/userinfo.component';
import { UsermaincarasolComponent } from './components/usermaincarasol/usermaincarasol.component';


@NgModule({
  declarations: [
    AppComponent,
    UserinfoComponent,
    UsermaincarasolComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
