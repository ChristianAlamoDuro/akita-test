import { Injectable } from '@angular/core';
import { LayoutStore } from './layout.state';

@Injectable({ providedIn: 'root' })
export class LayoutService {
  constructor(private _layoutStore: LayoutStore) {}

  toggleCart(value: boolean) {
    console.log(this._layoutStore);

    this._layoutStore.update({ showCart: value });
  }

  static GetCartState() {}
}
