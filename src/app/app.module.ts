import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';


// ANGULAR MATERIAL
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';

// DEFAULT COMPONENT
import { AppComponent } from './app.component';
// CREATED COMPONENT 
import { AddComponent } from './dialog/add/add.component';
import { EditComponent } from './dialog/edit/edit.component';
import { DeleteComponent } from './dialog/delete/delete.component';
import { DataService } from './services/data.service';
import { ListComponent } from './components/list/list.component';

@NgModule({
  declarations: [
    AppComponent,
    AddComponent,
    EditComponent,
    DeleteComponent,
    ListComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatButtonModule,
    MatInputModule,
    MatIconModule,
    MatSortModule,
    MatTableModule,
    MatToolbarModule,
    MatPaginatorModule,
  ],
  entryComponents: [
    AddComponent,
    EditComponent,
    DeleteComponent
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
