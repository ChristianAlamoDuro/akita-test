import { Injectable } from '@angular/core';
import { Store, StoreConfig } from '@datorama/akita';

export interface LayoutState {
  showCart: boolean;
}

export function createInitialState(): LayoutState {
  return {
    showCart: false,
  };
}

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'layout' })
export class LayoutStore extends Store<LayoutState> {
  constructor() {
    super(createInitialState());
  }
}
