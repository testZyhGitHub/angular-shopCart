import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
// 增加
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductAlertsComponent } from './product-alerts/product-alerts.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { CartComponent } from './cart/cart.component';

import { CartService } from './cart.service';

@NgModule({
   declarations: [
      AppComponent,
      TopBarComponent,
      ProductListComponent,
      ProductAlertsComponent,
      ProductDetailsComponent,
      CartComponent
   ],
   imports: [
      BrowserModule,
      AppRoutingModule,
      // 增加
      ReactiveFormsModule,
      //forRoot是用在根模块加载路由配置，而forChild是用在子模块加载路由配置。

      RouterModule.forRoot([
         { path: '', component: ProductListComponent },
         {path:'products/:productId', component: ProductDetailsComponent},
         {path:'cart', component: CartComponent}
       ])
   ],
   // 此处注入服务
   providers: [CartService],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
