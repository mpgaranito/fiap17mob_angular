import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserListPage } from './pages/userlist/UserList.page';
import { UserPage } from './pages/user/User.page';
import { LoginPage } from './pages/login/login.page'
import { Error404Component } from './components/error404/error404.component'
import { AuthGuard } from './guards/auth-guard';


const routes: Routes = [
  { path: '', component: LoginPage },
  { path: 'userlist', component: UserListPage, canActivate: [AuthGuard] },
  { path: 'user', component: UserPage , canActivate: [AuthGuard] },
  { path: 'user/:id', component: UserPage , canActivate: [AuthGuard] },
  { path: '**', component: Error404Component }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
