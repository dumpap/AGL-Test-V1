import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { NgPipesModule } from 'ngx-pipes';
import { FilterPipeModule } from 'ngx-filter-pipe'; // <-- Import
import { OrderModule } from 'ngx-order-pipe';

// HttpClient module for RESTful API
import { HttpClientModule } from '@angular/common/http';

// Forms module
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PetsComponent } from './pets/pets.component';

@NgModule({
  declarations: [
    AppComponent,
    PetsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgPipesModule,
    FilterPipeModule,
    OrderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
