import { RoboResolve } from './_helpers/robo-resolve';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageRoboComponent } from './views/page-robo/page-robo.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    PageRoboComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [
    RoboResolve,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
