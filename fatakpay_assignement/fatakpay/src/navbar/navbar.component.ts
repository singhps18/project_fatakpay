import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CustomerxjsService } from '../customerxjs/customerxjs.service';

@Component({
  selector: 'app-navbar',
  imports: [ RouterLink],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  cartCount = 0;
  cartProducts: any[] = [];
  constructor(private customrxjs:CustomerxjsService){

  }

  ngOnInit(): void {
    this.customrxjs.cartItems$.subscribe(cartItems => {
      this.cartCount = cartItems.length;
      this.cartProducts = cartItems;
    });
  }

  removeFromCart(productId: number): void {
    this.customrxjs.removeFromCart(productId);
  }
}