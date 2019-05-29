import { Component, OnInit, ViewChild, AfterViewChecked, AfterViewInit } from '@angular/core';

import { ProductItemComponent } from '../product-item/product-item.component';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit, AfterViewInit {

  @ViewChild('firstShopItem') firstShopItem: ProductItemComponent;

  constructor() { }

  ngOnInit() { 

  }

  ngAfterViewInit(): void { }



}
