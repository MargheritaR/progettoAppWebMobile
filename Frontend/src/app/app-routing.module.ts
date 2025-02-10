import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { LogoutComponent } from './logout/logout.component';
import { ChiSiamoComponent } from './chi-siamo/chi-siamo.component';
import { SiteNameComponent } from './site-name/site-name.component';
import { AuthGuard } from './auth-guard.service';
import { PostFormComponent } from './post-form/post-form.component';
import { UserPostsComponent } from './user-posts/user-posts.component';
import { AllPostsComponent } from './all-posts/all-posts.component';

const routes: Routes = [
  { path: 'navbar', component: NavbarComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent},
  { path: 'logout', component: LogoutComponent},
  { path: 'chi-siamo', component: ChiSiamoComponent},
  { path: '', redirectTo: '/site-name', pathMatch: 'full' },
  { path: 'post-form', component: PostFormComponent, canActivate: [AuthGuard]},
  { path: 'user-post', component: UserPostsComponent, canActivate: [AuthGuard]},
  { path: 'all-posts', component: AllPostsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
