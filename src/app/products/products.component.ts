import { Component, OnInit } from '@angular/core';

import { ProductsService } from '../products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

	public products;
	public tableTitles;

  public selectedProductInfo;

  constructor(private productsService: ProductsService) { }

  ngOnInit() {

  	this.productsService.getProducts()
  		.subscribe(
  				items => {
  					this.products = items.filter(item => item.length);
  					this.tableTitles = items[0];
  				}
  			);

  }

  displayProdInfo(product) {
    this.selectedProductInfo = product;
  }

}
