import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
// 增加
import { ReactiveFormsModule } from '@angular/forms';
// 为应用启用HttpClient
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductAlertsComponent } from './product-alerts/product-alerts.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { CartComponent } from './cart/cart.component';

import { CartService } from './cart.service';
import { ShippingComponent } from './shipping/shipping.component';

@NgModule({
   declarations: [
      AppComponent,
      TopBarComponent,
      ProductListComponent,
      ProductAlertsComponent,
      ProductDetailsComponent,
      CartComponent,
      ShippingComponent
   ],
   imports: [
      BrowserModule,
      AppRoutingModule,
      ReactiveFormsModule,
      //添加到应用模块（@NgModule）的imports数组中。\nReactiveFormsModule,
      HttpClientModule,
      //forRoot是用在根模块加载路由配置，而forChild是用在子模块加载路由配置。
      RouterModule.forRoot([
         { path: '', component: ProductListComponent },
         { path: 'products/:productId', component: ProductDetailsComponent },
         { path: 'cart', component: CartComponent },
         { path: 'shipping', component: ShippingComponent },
      ])
   ],
   //此处注入服务
   providers: [
      CartService
   ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
