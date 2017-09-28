import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ConeComponent } from './cone/cone.component';
import { CtwoComponent } from './ctwo/ctwo.component';

@NgModule({
  declarations: [
    AppComponent,
    ConeComponent,
    CtwoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
