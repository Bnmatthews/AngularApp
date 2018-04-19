import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule, Http, Response } from '@angular/http';


import { AppComponent } from './app.component';
import { GhibliSearchComponent } from './ghibli-search/ghibli-search.component';




@NgModule({
  declarations: [
    AppComponent,
    GhibliSearchComponent
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
