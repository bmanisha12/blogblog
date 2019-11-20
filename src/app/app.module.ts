import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { CommonModule } from '@angular/common';
import {HttpClientModule} from '@angular/common/http'
import {AppComponent} from './app.component';
import { FileParseComponent } from './fileoperation/fileparse.component';

@NgModule({
  declarations: [
    AppComponent,
    FileParseComponent
  ],
  imports: [
     HttpClientModule, FormsModule, CommonModule, BrowserModule
  ],
   bootstrap: [AppComponent]
})
export class AppModule { }
