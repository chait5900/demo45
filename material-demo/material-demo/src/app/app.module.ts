import { TopicService } from './my-table-component/topic.service';
import { MyTableComponentComponent } from './my-table-component/my-table-component.component';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NoopAnimationsModule} from '@angular/platform-browser/animations';
import {MatCheckboxModule} from '@angular/material';
import {MatSelectModule, MatInputModule, MatTableModule} from '@angular/material';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';



import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    MyTableComponentComponent
  ],
  imports: [
    BrowserModule,FormsModule, ReactiveFormsModule, HttpModule, JsonpModule,
    BrowserAnimationsModule,
    MatCheckboxModule, MatSelectModule, MatInputModule, MatTableModule
  ],
  providers: [TopicService],
  bootstrap: [AppComponent]
})
export class AppModule { }
