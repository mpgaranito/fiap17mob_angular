import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule} from '@angular/forms'
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';

import { environment } from '../environments/environment';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HeaderComponent } from './components/Header/Header.component';
import { LoadingComponent } from './components/Loading/Loading.component';
import { UserListPage } from './pages/UserList/UserList.page';
import { UserPage } from './pages/User/User.page';
import { ServiceWorkerModule } from '@angular/service-worker';
//import { filterPipe } from './pipes/filter.pipe';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoadingComponent,
    UserListPage,
    UserPage,
  //  filterPipe,
  ],
  imports: [
    AngularFireModule.initializeApp(environment.firebase),
 	  AngularFirestoreModule,
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    ReactiveFormsModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
