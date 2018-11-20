import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

import { catchError, map } from 'rxjs/internal/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

	private url: string = "../assets/data/products.json";

  constructor(private http: HttpClient) { }

  getProducts() {
  	return this.http.get(this.url)
      .pipe(
    				// catchError(this.handleError);
    				map((result: any) => result )
           );
  }


}
