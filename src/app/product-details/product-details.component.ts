import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { products } from '../products';
import { CartService } from '../cart.service'

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  // 定义product属性
  product;
  // 把ActivedRoute注入到构造函数中
  constructor(
    // 注入路由？
    private route: ActivatedRoute,
    // 注入 CartService 来管理购物车信息。
    private cartService1: CartService,
  ) { }
  // 这里是cartService1
  addToCart(product) {
    window.alert('加进购物车啦');
    this.cartService1.addToCart(product);
  }
  // 订阅（subscribe）路由参数并根据其 productId 获取商品信息。
  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.product = products[+params.get('productId')]
    });
  }

}
