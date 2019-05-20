import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutmeComponent } from './aboutme/aboutme.component';
import { ResumeComponent } from './resume/resume.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { CoreComponent } from './core/core.component';



const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },


  { path: 'login', component: LoginComponent },
  {
    path: 'home', component: CoreComponent, children: [
      { path: '', component: HomeComponent },
      { path: 'aboutme', component: AboutmeComponent },
      { path: 'resume', component: ResumeComponent }]
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
