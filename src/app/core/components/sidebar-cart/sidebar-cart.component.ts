import { Component, inject, Signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { LayoutService } from '../../state/layout/layout.service';
import { Product } from '../../state/product/product.model';
import { ProductQuery } from '../../state/product/product.query';
import { ProductStore } from '../../state/product/product.state';

@Component({
  selector: 'app-sidebar-cart',
  standalone: true,
  imports: [],
  templateUrl: './sidebar-cart.component.html',
  styleUrl: './sidebar-cart.component.css',
})
export class SidebarCartComponent {
  private _layoutService: LayoutService = inject(LayoutService);
  private _productQuery: ProductQuery = inject(ProductQuery);
  private _productStore: ProductStore = inject(ProductStore);

  cartState: Signal<boolean | undefined> = this._layoutService.getCartState();
  productsInCart: Signal<Product[] | undefined> = toSignal(
    this._productQuery.selectProductsInCart()
  );

  resetCart(): void {
    this._productStore.resetCart();
  }
}
