import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MyMaterialModule } from  './my-material/my-material.module';
import { RouterModule, Routes } from '@angular/router';
import{UserService} from './user.service';
import { HttpClientModule, HttpClient} from '@angular/common/http';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { ProductComponent } from './product/product.component';
import { HomepageComponent } from './homepage/homepage.component';
import { ProductDomainComponent } from './product-domain/product-domain.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { EditComponent } from './edit/edit.component';
import { NotificationService } from './notification.service';
import {FormControl} from "@angular/forms";




@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    LoginComponent,
    ProductComponent,
    HomepageComponent,
    ProductDomainComponent,
    EditComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MyMaterialModule,
    FormsModule,
    HttpClientModule,
    RouterModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [UserService,NotificationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
