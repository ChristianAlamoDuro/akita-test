import { CommonModule } from '@angular/common';
import { Component, inject, OnInit, Signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { Product } from '../../state/product/product.model';
import { ProductQuery } from '../../state/product/product.query';
import { ProductService } from '../../state/product/product.service';
import { ProductStore } from '../../state/product/product.state';

@Component({
  selector: 'app-store',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './store.component.html',
  styleUrl: './store.component.css',
})
export class StoreComponent implements OnInit {
  private _productStore: ProductStore = inject(ProductStore);
  private _productQuery: ProductQuery = inject(ProductQuery);
  private _productService: ProductService = inject(ProductService);

  products: Signal<Product[] | undefined> = toSignal(
    this._productQuery.selectAll()
  );

  ngOnInit(): void {
    this._productService.getProducts();
  }

  addOrRemoveForCar(id: number): void {
    this._productStore.addOrRemoveForCart(id);
  }
}
