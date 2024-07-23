import { Injectable } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { LayoutStore } from './layout.state';

@Injectable({ providedIn: 'root' })
export class LayoutService {
  constructor(private _layoutStore: LayoutStore) {}

  toggleCart(value: boolean) {
    this._layoutStore.update({ showCart: value });
  }

  getCartState() {
    return toSignal(this._layoutStore._select((state) => state.showCart));
  }
}
