import { Component, OnInit, Input, Output, ElementRef, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent {

	@Input() public products;
  @Input() public titles;

  @Output() public throwSelectedProduct = new EventEmitter();

  public productsPerPage = 5;
  public currPage = 0;

  public productsToShow = new Array; // Creating an array-to-show
  public pages = new Array;

  constructor(
      private elementRef: ElementRef
    ) { }

  isVisible() {
    return this.products && this.titles;
  }

  renderTable() {

    if (this.isVisible()) {

      let arrayCell = 0;

      this.productsToShow[0] = new Array;

      this.products.forEach((prod, num) => {

        if ( num > (this.productsPerPage * (arrayCell + 1) - 1) ) { // Condition for ctreation of a new cell for the next page in the array-to-show
          arrayCell = arrayCell + 1;
          this.productsToShow[arrayCell] = new Array;
        };

        this.productsToShow[arrayCell].push(prod); // Adding product from the main array to the array-to-show

      });

      this.productsToShow.forEach((page, num) => this.pages[num] = num + 1);

      return true;
    }
    
  }

  setProdToShowNumber() {
    this.productsPerPage = parseInt(this.elementRef.nativeElement.querySelector('.paginator__input-text').value);
  }

  selectPage(event) {
    this.currPage = parseInt(event.target.innerHTML) - 1;
  }

  displaySelectedProd(event, product) {
    this.throwSelectedProduct.emit(product);
  }

}
