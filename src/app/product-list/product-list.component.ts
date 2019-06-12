import { Component, OnInit } from '@angular/core';
// notice
import { products } from '../products';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  // notice 一开始就有了
  products = products;

  constructor() { }

  ngOnInit() {
  }

  share() {
    window.alert("我被分享了")
  }

  onNotify() {
    window.alert('这是一个提醒')
  }

}
