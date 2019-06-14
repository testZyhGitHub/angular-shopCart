// import { BrowserModule } from '@angular/platform-browser';
// import { NgModule } from '@angular/core';

// import { AppRoutingModule } from './app-routing.module';
// import { AppComponent } from './app.component';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// import {MatButtonModule, MatCheckboxModule} from '@angular/material';
// import { AutoComponent } from './auto/auto.component';


// @NgModule({
   //declarations: [
      //SecondComponent\n//\n//
  //  ],
   //imports: [
      //BrowserModule,
      //AppRoutingModule,
      //BrowserAnimationsModule,
      //MatButtonModule,
      //MatCheckboxModule\\n//\n//
  //  ],
   //providers: [],
   //bootstrap: [
      //AppComponent\\n//\\n//\n//
//    ],
//    declarations: [
      
//    ]
// })
// export class AppModule { }
// 待看

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {ReactiveFormsModule} from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AutoComponent } from './auto/auto.component';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import {MatSortModule} from '@angular/material/sort';
// import { FlexLayoutModule } from '@angular/flex-layout';

//指定UI对应的material组件？？？？？？？？？？？？？？？？？？？？？？？？？？？？？？？？？？？？？？？？？？？？？？？？？？？？？？？？？
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

import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatPaginatorModule} from '@angular/material/paginator';
import 'hammerjs';
import { SecondComponent } from './second/second.component';
import { SetComponent } from './set/set.component';


@NgModule({
  declarations: [
    AppComponent,
    AutoComponent,
    SecondComponent,
    SetComponent
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,

    // Material

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
    RouterModule.forRoot([
      {path: '', component: SecondComponent},
      {path:'set', component: SetComponent}
    ])
    // Flex-layout
    // FlexLayoutModule
  ],
 
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }