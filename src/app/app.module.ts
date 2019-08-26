import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from '../environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/Header.component';
import { LoadingComponent } from './components/loading/Loading.component';
import { UserListPageComponent } from './pages/userlist/UserList.page';
import { UserPageComponent } from './pages/user/User.page';
import { ServiceWorkerModule } from '@angular/service-worker';
import { FilterPipe } from './pipes/filter.pipe';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { OrderPipe } from './pipes/order.pipe';
import { NgxMaskModule } from 'ngx-mask';
import { LoginPageComponent } from './pages/login/Login.page';
import { Error404Component } from './components/error404/Error404.component';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AuthService } from './services/auth.service';
import { AuthGuard } from './guards/auth-guard';
import { ConfirmationDialogService } from './services/confirmation-dialog/confirmation-dialog.service';
import { ConfirmationDialogComponent } from './services/confirmation-dialog/confirmation-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoadingComponent,
    UserListPageComponent,
    UserPageComponent,
    OrderPipe,
    FilterPipe,
    LoginPageComponent,
    Error404Component,
    ConfirmationDialogComponent
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
  providers: [AuthService, AuthGuard, ConfirmationDialogService],
  bootstrap: [AppComponent],
  entryComponents: [ ConfirmationDialogComponent ],
})
export class AppModule { }
