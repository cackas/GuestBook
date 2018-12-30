import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { AppRoutingModule } from './app-routing.module';
import { AuthLyaoutComponent } from './shared/layouts/auth-lyaout/auth-lyaout.component';
import { SiteLyaoutComponent } from './shared/layouts/site-lyaout/site-lyaout.component';
import { RegisterPageComponent } from './register-page/register-page.component'

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    AuthLyaoutComponent,
    SiteLyaoutComponent,
    RegisterPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
