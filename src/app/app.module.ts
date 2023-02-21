import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule } from '@angular/common/http';
import { HandleExcelFileComponent } from './handle-excel-file/handle-excel-file.component';
import { HandleExcelComponent } from './handle-excel/handle-excel.component';
import { ShowAllUsersComponent } from './show-all-users/show-all-users.component';

@NgModule({
  declarations: [
    AppComponent,
    HandleExcelFileComponent,
    HandleExcelComponent,
    ShowAllUsersComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  // providers: [TaskService],
  bootstrap: [AppComponent]
})
export class AppModule { }
