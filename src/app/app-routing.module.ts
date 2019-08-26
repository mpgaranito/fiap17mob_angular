import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserListPageComponent } from './pages/userlist/UserList.page';
import { UserPageComponent } from './pages/user/User.page';
import { LoginPageComponent } from './pages/login/Login.page';
import { Error404Component } from './components/error404/Error404.component';
import { AuthGuard } from './guards/auth-guard';


const routes: Routes = [
  { path: '', component: LoginPageComponent },
  { path: 'userlist', component: UserListPageComponent, canActivate: [AuthGuard] },
  { path: 'user', component: UserPageComponent , canActivate: [AuthGuard] },
  { path: 'user/:id', component: UserPageComponent , canActivate: [AuthGuard] },
  { path: '**', component: Error404Component }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
