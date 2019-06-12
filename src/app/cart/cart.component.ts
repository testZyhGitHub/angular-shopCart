import { Component, OnInit } from '@angular/core';
import {FormBuilder} from '@angular/forms';
// 让它能够使用购物车服务
import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

// 定义items属性
items;
checkoutForm;
  constructor
  (
// 注入CartComponent来管理购物车信息
    private cartService: CartService,
    private formBuilder: FormBuilder,
  ) { 
// 使用getitems()方法设置这些商品
    this.items=this.cartService.getItems();

    this.checkoutForm=this.formBuilder.group({
      name: '',
      address: ''
    });
  }
onSubmit(customerData){
  console.warn('yeyeye',customerData);

  this.items = this.cartService.clearCart();
  this.checkoutForm.reset();
}
  ngOnInit() {
  }

}