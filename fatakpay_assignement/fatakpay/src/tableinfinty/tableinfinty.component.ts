import { Component, OnInit, signal, WritableSignal } from '@angular/core';
import { CustomerxjsService } from '../customerxjs/customerxjs.service';
import { HttpClient, HttpClientModule ,} from '@angular/common/http';
import { MatCard, MatCardContent, MatCardHeader, MatCardTitle } from '@angular/material/card';
import { NgxDatatableModule, ColumnMode } from '@swimlane/ngx-datatable';
import { NgScrollbarExt, AsyncDetection } from 'ngx-scrollbar';

interface Employee {
  name: string;
  age: number;
  gender: string;
  company: string;
}


@Component({
  selector: 'app-tableinfinty',
  imports: [   NgxDatatableModule,
    MatCard,
    HttpClientModule,
    MatCardHeader,
    MatCardTitle,
    MatCardContent
   ],
  templateUrl: './tableinfinty.component.html',
  styleUrl: './tableinfinty.component.css'
})
export class TableinfintyComponent implements OnInit {

productItem:any=[]

rows: WritableSignal<Employee[]> = signal([]);
ColumnMode = ColumnMode;

constructor(private http: HttpClient ,private apiservice:CustomerxjsService) {}
apilink = 'https://raw.githubusercontent.com/swimlane/ngx-datatable/master/src/assets/data/company.json'; 
product:any=[]
isLoading = false;
ngOnInit() {
  this.apiservice.get(this.apilink)
    .subscribe((data: Employee[]) => {
      this.rows.set(data);}, error => {
      console.error('Error fetching data:', error);
      
    });
    
}

loadMoreRows() {
  this.isLoading = true;

  const currentRows = this.rows();
  const newRows = Array.from({ length: 20 }, (_, i) => ({
    name: `Name ${currentRows.length + i + 1}`,
    age: Math.floor(Math.random() * 50) + 20,
    gender: i % 2 === 0 ? 'Male' : 'Female',
    company: `Company ${currentRows.length + i + 1}`
  }));

  setTimeout(() => {
    this.rows.set([...currentRows, ...newRows]);
    this.isLoading = false;
  }, 1000); 
}
onScroll(event: any): void {
  const offset = event.offsetY || 0;
  const tableHeight = event.target.scrollHeight || 0;

  if (!this.isLoading && offset + event.target.clientHeight >= tableHeight - 50) {
    this.loadMoreRows();
  }
}
}
