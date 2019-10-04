import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ProductsService } from '././services/products.service';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { ProductComponent } from './components/product/product.component';
import { HttpClientModule }    from '@angular/common/http';
import { NavbarComponent } from './components/navbar/navbar.component';
import { RegisterComponent } from './components/register/register.component';


const config = {
  apiKey: "AIzaSyAqIVWFG07NYFJPTL4mQXyLZWcKMKomyyk",
  authDomain: "desafioripley2.firebaseapp.com",
  databaseURL: "https://desafioripley2.firebaseio.com",
  projectId: "desafioripley2",
  storageBucket: "",
   messagingSenderId: "819385874124",
  appId: "1:819385874124:web:ab3936e1cec4bb14343469",
   measurementId: "G-PFDGNJ1JHN"
}

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    ProductComponent,
    NavbarComponent,
    RegisterComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AngularFireModule.initializeApp(config),
    AngularFirestoreModule,
    AngularFireAuthModule,
    FormsModule
    
  ],
  providers: [ProductsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
