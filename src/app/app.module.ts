
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AutoComponent } from './auto/auto.component';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { MatSortModule } from '@angular/material/sort';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatTableModule } from '@angular/material/table';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatRadioModule} from '@angular/material/radio';

import { FlexLayoutModule } from '@angular/flex-layout';


import {
  MatButtonModule,
  MatCardModule,
  MatCheckboxModule,
  MatDialogModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatSelectModule,
  MatSidenavModule,
  MatSlideToggleModule,
  MatTabsModule,
  MatToolbarModule
} from '@angular/material';

import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatPaginatorModule } from '@angular/material/paginator';
import 'hammerjs';

import { SetComponent } from './set/set.component';
import { HomeComponent } from './home/home.component';
import { ExamInfoComponent } from './exam-info/exam-info.component';



@NgModule({
   declarations: [
      AppComponent,
      AutoComponent,
      SetComponent,
      HomeComponent,
      ExamInfoComponent
   ],
   imports: [
      BrowserModule,
      FormsModule,
      HttpClientModule,
      BrowserAnimationsModule,
      MatButtonModule,
      MatCardModule,
      MatCheckboxModule,
      MatDialogModule,
      MatIconModule,
      MatInputModule,
      MatListModule,
      MatMenuModule,
      MatSelectModule,
      MatSidenavModule,
      MatSlideToggleModule,
      MatTabsModule,
      MatToolbarModule,
      MatAutocompleteModule,
      ReactiveFormsModule,
      MatSortModule,
      MatPaginatorModule,
      MatGridListModule,
      MatTableModule,
      MatDatepickerModule,
      MatNativeDateModule,
      MatFormFieldModule,
      MatRadioModule,
      FlexLayoutModule,
      RouterModule.forRoot([
        {path:'',component: HomeComponent},
        {path:'set',component: SetComponent}])
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }