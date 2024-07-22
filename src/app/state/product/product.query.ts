import { Injectable } from '@angular/core';
import { QueryEntity } from '@datorama/akita';
import { Observable } from 'rxjs';
import { Product } from './product.model';
import { ProductState, ProductStore } from './product.state';

@Injectable({ providedIn: 'root' })
export class ProductQuery extends QueryEntity<ProductState> {
  constructor(protected productStore: ProductStore) {
    super(productStore);
  }

  selectProductsInCart(): Observable<Product[]> {
    return this.select((state) => {
      let productsInCart: Product[] = [];
      state.productsInCart.forEach((id) => {
        const product = this.getEntity(id);
        if (product) {
          productsInCart.push(product);
        }
      });

      return productsInCart;
    });
  }
}
