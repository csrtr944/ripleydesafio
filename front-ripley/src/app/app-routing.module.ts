import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { ProductComponent } from './components/product/product.component';
import { RegisterComponent } from './components/register/register.component';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path:'productos', component: HomeComponent, canActivate: [AuthGuard]},
  {path: 'producto/:id', component: ProductComponent, canActivate: [AuthGuard]},
  {path: 'register', component: RegisterComponent },
  {path: '', redirectTo:'/login', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {routes}
