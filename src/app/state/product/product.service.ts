import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { first } from 'rxjs';
import { ProductStore } from './product.state';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private _productStore: ProductStore = inject(ProductStore);
  private _httpClient: HttpClient = inject(HttpClient);

  private readonly _PRODUCT_API = 'https://fakestoreapi.com';

  getProducts() {
    // TODO: move api url to environment file
    this._httpClient
      .get(`${this._PRODUCT_API}/products`)
      .pipe(first())
      .subscribe((products: any) => {
        console.log(products);

        this._productStore.add(products);
      });
  }
}
