import { Component } from '@angular/core';
import { CustomerxjsService } from './customerxjs.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-customerxjs',
  imports: [ HttpClientModule],
  templateUrl: './customerxjs.component.html',
  styleUrls: ['./customerxjs.component.css'],

})
export class CustomerxjsComponent {

  constructor(private customrxjs:CustomerxjsService){

  }
  apilink = 'https://dummyjson.com/products'; 
  product:any=[]

  truncatedDescription = '';
  ngOnInit() {
    this.customrxjs.get(this.apilink)
      .subscribe(response => {
        this.product=response.products
        // console.log('API response:', response);
      }, error => {
        console.error('Error fetching data:', error);
        
      });

      // this.truncatedDescription = this.product.description.substring(0, 20) + '...';
  }

  isExpand=false;

  toMore(event:Event):void{
    event.preventDefault();
    this.isExpand=!this.isExpand;
  }

  addCart(prod: any): void {
    this.customrxjs.addToCart(prod);
  }
  
}
