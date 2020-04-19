import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';
import { ProductComponent } from './product/product.component';
import { HomepageComponent } from './homepage/homepage.component';
import { ProductDomainComponent } from './product-domain/product-domain.component';


const routes: Routes = [
  {path: 'home/:id', component: HomepageComponent},
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegistrationComponent },
  { path:'product', component: ProductComponent},
  { path: 'productDomain', component: ProductDomainComponent},
  //{path:'home/:id',component: HomepageComponent}
  { path: '', component: HomepageComponent, pathMatch: 'full'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
