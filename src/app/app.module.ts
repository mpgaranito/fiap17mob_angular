import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms'
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from '../environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/Header.component';
import { LoadingComponent } from './components/loading/Loading.component';
import { UserListPage } from './pages/userlist/UserList.page';
import { UserPage } from './pages/user/User.page';
import { ServiceWorkerModule } from '@angular/service-worker';
import { FilterPipe } from './pipes/filter.pipe';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { OrderPipe } from './pipes/order.pipe';
import { NgxMaskModule } from 'ngx-mask';
import { LoginPage } from './pages/login/login.page';
import { Error404Component } from './components/error404/error404.component';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AuthService } from './services/auth.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoadingComponent,
    UserListPage,
    UserPage,
    OrderPipe,
    FilterPipe,
    LoginPage,
    Error404Component,
  ],
  imports: [
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    ReactiveFormsModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    AngularFireAuthModule,
    NgxMaskModule.forRoot()
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
