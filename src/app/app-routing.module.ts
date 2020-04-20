import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';
import { ProductComponent } from './product/product.component';
import { HomepageComponent } from './homepage/homepage.component';
import { ProductDomainComponent } from './product-domain/product-domain.component';
import { EditComponent } from './edit/edit.component';


const routes: Routes = [
  {path: '', pathMatch:'full', redirectTo: 'home'},
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegistrationComponent },
  { path:'product', component: ProductComponent},
  { path: 'productDomain', component: ProductDomainComponent},
  { path: 'home', component: HomepageComponent},
  { path: 'edit', component: EditComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
