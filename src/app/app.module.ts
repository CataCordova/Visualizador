import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { ExportExcelComponent } from './components/export-excel/export-excel.component';
import { PanelsComponent } from './components/panels/panels.component';
import { PaginationComponent } from './components/pagination/pagination.component';
import { FormComponent } from './components/form/form.component';
import { SubaccionListComponent } from './components/list/list.component';

import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SubaccionListComponent,
    ExportExcelComponent,
    PanelsComponent,
    PaginationComponent,
    FormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
