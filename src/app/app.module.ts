import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { changeColor } from './app.directive';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  exports: [
    changeColor
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
