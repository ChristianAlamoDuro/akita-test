import { Component, Signal } from '@angular/core';
import { LayoutService } from '../../state/layout/layout.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  cart: Signal<boolean | undefined>;

  constructor(private _layoutService: LayoutService) {
    this.cart = this._layoutService.getCartState();
  }

  toggleCart() {
    this._layoutService.toggleCart(!this.cart());
  }
}
