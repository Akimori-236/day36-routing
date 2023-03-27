import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home.component';
import { CatComponent } from './components/cat.component';
import { DogComponent } from './components/dog.component';
import { CustomerComponent } from './components/customer.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CatComponent,
    DogComponent,
    CustomerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
