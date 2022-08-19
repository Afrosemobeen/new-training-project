import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input'
import { HttpClientModule } from '@angular/common/http';
import {  MatFormFieldModule } from '@angular/material/form-field';
import { ErrorStateMatcher } from '@angular/material/core';



@NgModule({
  declarations: [],
  imports: [
    CommonModule, 
    ReactiveFormsModule,HttpClientModule,FormsModule, MatFormFieldModule,
    [MatCardModule, MatButtonModule, MatToolbarModule, MatIconModule, MatInputModule,  ]
  ],
  exports:[
    ReactiveFormsModule,HttpClientModule,FormsModule, MatFormFieldModule,
    [MatCardModule, MatButtonModule, MatToolbarModule, MatIconModule, ],CommonModule
  ],
})
export class SharedModule { }
