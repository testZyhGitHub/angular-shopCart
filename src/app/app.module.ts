// import { BrowserModule } from '@angular/platform-browser';
// import { NgModule } from '@angular/core';

// import { AppRoutingModule } from './app-routing.module';
// import { AppComponent } from './app.component';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// import {MatButtonModule, MatCheckboxModule} from '@angular/material';
// import { AutoComponent } from './auto/auto.component';


// @NgModule({
//    declarations: [
//       AppComponent,
//       AutoComponent
//    ],
//    imports: [
//       BrowserModule,
//       AppRoutingModule,
//       BrowserAnimationsModule,
//       MatButtonModule,
//       MatCheckboxModule
//    ],
//    providers: [],
//    bootstrap: [
//       AppComponent
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

// import { FlexLayoutModule } from '@angular/flex-layout';

//指定UI对应的material组件？？？？？？？？？？？？？？？？？？？？？？？？？？？？？？？？？？？？？？？？？？？？？？？？？？？？？？？？？
import {
//   MatButtonModule,
//   MatCardModule,
//   MatCheckboxModule,
//   MatDialogModule,
//   MatIconModule,
  MatInputModule
//   MatListModule,
//   MatMenuModule,
//   MatSelectModule,
//   MatSidenavModule,
//   MatSlideToggleModule,
  // MatTabsModule
//   MatToolbarModule
} from '@angular/material';

import {MatAutocompleteModule} from '@angular/material/autocomplete';

import 'hammerjs';


@NgModule({
  declarations: [
    AppComponent,
    AutoComponent,
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,

    // Material

    // MatButtonModule,
    // MatCardModule,
    // MatCheckboxModule,
    // MatDialogModule,
    // MatIconModule,
    MatInputModule,
    // MatListModule,
    // MatMenuModule,
    // MatSelectModule,
    // MatSidenavModule,
    // MatSlideToggleModule,
    // MatTabsModule,
    // MatToolbarModule,
    MatAutocompleteModule,
    ReactiveFormsModule
    // Flex-layout
    // FlexLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }