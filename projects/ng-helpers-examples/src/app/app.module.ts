import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgHelpersModule } from 'ng-helpers';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgHelpersModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
