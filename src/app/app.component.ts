import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './core/header/header.component';
import { SidebarCartComponent } from './core/sidebar-cart/sidebar-cart.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  imports: [RouterOutlet, HeaderComponent, SidebarCartComponent],
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'akita-test';
}
