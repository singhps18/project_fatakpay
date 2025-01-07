import { Component } from '@angular/core';


@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  images: string[] = [];

  ngOnInit(): void {
    this.images = Array.from({ length: 5 }, () =>
      `https://picsum.photos/800/400?random=${Math.floor(Math.random() * 1000)}`
    );
  }
}
