import { Component, OnInit } from '@angular/core';

@Component({
  template: `
    <router-outlet></router-outlet>
  `,
  // templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
