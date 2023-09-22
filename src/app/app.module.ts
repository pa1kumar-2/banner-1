import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BannerOneComponent } from './banner/banner-one/banner-one.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FileUploadComponent } from './shared/file-upload/file-upload.component';

@NgModule({
  declarations: [
    AppComponent,
    BannerOneComponent,
    FileUploadComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
