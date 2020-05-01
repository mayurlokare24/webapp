import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatNativeDateModule,MatIconModule,MatExpansionModule,MatSelectModule,MatButtonModule,MatMenuModule,MatTabsModule,MatSidenavModule,MatCheckboxModule, MatToolbarModule, MatCardModule,MatFormFieldModule,MatInputModule,MatRadioModule,MatListModule,} from  '@angular/material';
import {MatDatepickerModule} from  '@angular/material/datepicker';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [],
  imports: [CommonModule,MatNativeDateModule,MatExpansionModule,MatSelectModule,MatMenuModule,MatDatepickerModule,MatIconModule,MatButtonModule,MatCheckboxModule, MatToolbarModule,FormsModule, MatCardModule,MatFormFieldModule,MatInputModule,MatListModule,MatRadioModule, MatMenuModule],

 
exports: [MatNativeDateModule,FormsModule,

MatDatepickerModule,MatIconModule,MatButtonModule,MatExpansionModule,MatSelectModule,MatMenuModule,MatTabsModule,MatSidenavModule,MatCheckboxModule, MatToolbarModule, MatCardModule,MatFormFieldModule,MatInputModule,MatListModule,MatRadioModule,],
})
export class MyMaterialModule { }
