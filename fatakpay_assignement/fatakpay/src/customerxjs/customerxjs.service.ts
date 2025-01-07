import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, catchError, Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomerxjsService {
  constructor(private http: HttpClient) {}
  private cartItemsSubject = new BehaviorSubject<any[]>([]);
  cartItems$ = this.cartItemsSubject.asObservable();
  private formatErrors(error: any) {
    return throwError(error.error);
  }

  get(path: string, params: HttpParams = new HttpParams()): Observable<any> {
    return this.http.get(path, { params }).pipe(catchError(this.formatErrors));
  }


  addToCart(product: any) {
    const currentCart = this.cartItemsSubject.value;
    const updatedCart = [...currentCart, product];
    this.cartItemsSubject.next(updatedCart);
  }

  removeFromCart(productId: number) {
    const currentCart = this.cartItemsSubject.value;
    const updatedCart = currentCart.filter(product => product.id !== productId);
    this.cartItemsSubject.next(updatedCart); 
  }
}
