import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from "../navbar/navbar.component";
import { CustomerxjsService } from '../customerxjs/customerxjs.service';
import { HttpClientModule } from '@angular/common/http'; 

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavbarComponent,HttpClientModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  providers:[CustomerxjsService]
})
export class AppComponent {
  title = 'fatakpay';
}
