import { Injectable } from '@angular/core';
import { EntityState, EntityStore, StoreConfig } from '@datorama/akita';
import { Product } from './product.model';

export interface ProductState extends EntityState<Product, number> {
  productsInCart: number[];
}

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'product' })
export class ProductStore extends EntityStore<ProductState> {
  constructor() {
    super({ productsInCart: [] });
  }

  addOrRemoveForCart(id: number): void {
    this.update((state) => {
      if (state.productsInCart.includes(id)) {
        return {
          ...state,
          productsInCart: state.productsInCart.filter(
            (productId) => productId !== id
          ),
        };
      }

      return {
        ...state,
        productsInCart: [...state.productsInCart, id],
      };
    });
  }

  resetCart(): void {
    this.update((state) => {
      return {
        ...state,
        productsInCart: [],
      };
    });
  }
}
