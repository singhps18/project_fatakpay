import { Injectable } from '@angular/core';
import {delay,Observable,of} from 'rxjs'



@Injectable({
  providedIn: 'root'
})
export class TableinfintyService {

  private totalItem=100


  getItem(page=1,itemperpage=10):Observable<string[]>{
    const startindex=(page-1)*itemperpage;
    const endIndex=startindex+itemperpage;
    const item=[];
    for(let i=startindex;i<endIndex;i++){
      if(i<this.totalItem){
        item.push(`Item ${i+1}`)
      }
    }
    return of(item).pipe(delay(500))
  }

  constructor() { }
   


}
