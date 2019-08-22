import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserListPage } from './pages/userlist/UserList.page';
import { UserPage } from './pages/user/User.page';
import { LoginPage } from './pages/login/login.page'
import { Error404Component }  from './components/error404/error404.component'

const routes: Routes = [
  { path: '', component: LoginPage },
  { path: 'userlist', component: UserListPage },
  { path: 'user', component: UserPage },
  { path: 'user/:id', component: UserPage },
  { path: '**', component: Error404Component }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
