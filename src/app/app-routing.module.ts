import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserListPage } from './pages/userList/UserList.page';
import { UserPage } from './pages/user/User.page';

const routes: Routes = [
  { path: '', component: UserListPage },
  { path: 'user/:id', component: UserPage }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
