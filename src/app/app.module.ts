import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { PaginationComponent } from './pagination/pagination.component';
import { FormsModule } from '@angular/forms';
import { HttpClientService } from './services/HttpService';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { DataService } from './services/DataService';

@NgModule({
  declarations: [
    AppComponent,
    ParentComponent,
    ChildComponent,
    PaginationComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [
    HttpClient,
    HttpClientService,
    DataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
