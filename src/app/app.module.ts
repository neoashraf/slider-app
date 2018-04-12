import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgxSlideshowModule } from 'ngx-slideshow';

import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    NgxSlideshowModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
