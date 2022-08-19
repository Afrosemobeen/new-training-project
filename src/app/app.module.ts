import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { MatDividerModule } from '@angular/material/divider';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatGridListModule } from '@angular/material/grid-list';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import { ProductsComponent } from './products/products.component';
import { SharedModule } from './shared/shared/shared.module';
 
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProductsComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatDividerModule,
    MatProgressBarModule,
    MatGridListModule,
    FlexLayoutModule,
    SharedModule

    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
