import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AboutmeComponent } from './aboutme/aboutme.component';
import { ResumeComponent } from './resume/resume.component';
import { NavComponent } from './main/nav/nav.component';
import { FooterComponent } from './main/footer/footer.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { CoreComponent } from './core/core.component';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    AboutmeComponent,
    ResumeComponent,
    NavComponent,
    FooterComponent,
    HomeComponent,
    LoginComponent,
    CoreComponent


  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
