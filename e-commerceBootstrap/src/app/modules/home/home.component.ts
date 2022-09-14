import { Categorias } from './../categorias';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  datas = ['Camisa 1'
  ,'Camisa 2'
  ,'Camisa 3'
  ,'Camisa 4'
  ,'Camisa 5'
  ,'Camisa 6'
  ,'Camisa 7'
  ,'Camisa 8'
  ,'Camisa 9'
  ,'Camisa 10'
  ,'Camisa 11'
  ,'Camisa 12'
  ,'Camisa 12']

  products = [
    {
      id: 1, vl_product: '00.00', srcImg: 'assets/products/praia/praia1.jpg',name_product: 'Camisa 1'
    },
    {
      id: 2, vl_product: '00.00', srcImg: 'assets/products/praia/praia4.jpg', name_product: 'Camisa 2'
    },
    {
      id: 3, vl_product: '00.00', srcImg: 'assets/products/praia/praia4.jpg', name_product: 'Camisa 3'
    },
    {
      id: 4, vl_product: '70.00', srcImg: 'assets/products/praia/praia5.jpg', name_product: 'Camisa 4'
    },
    {
      id: 5, vl_product: '22300.00', srcImg: 'assets/products/praia/praia5.jpg', name_product: 'Camisa 5'
    },
    {
      id: 6, vl_product: '32.00', srcImg: 'assets/products/praia/praia5.jpg', name_product: 'Camisa 6'
    },
    {
      id: 7, vl_product: '1222.00', srcImg: 'assets/products/praia/praia5.jpg', name_product: 'Camisa 7'
    },
    {
      id: 8, vl_product: '00.00', srcImg: 'assets/products/praia/praia1.jpg', name_product: 'Camisa 8'
    },
    {
      id: 9, vl_product: '00.00', srcImg: 'assets/products/praia/praia1.png', name_product: 'Camisa 9'
    },
    {
      id: 10, vl_product: '00.00', srcImg: 'assets/products/praia/praia1.png', name_product: 'Camisa 10'
    },
    {
      id: 11, srcImg: 'assets/products/praia/praia1.png', name_product: 'Camisa 11'
    },
    {
      id: 12, srcImg: 'assets/products/praia/praia1.png', name_product: 'Camisa 12'
    }
  ]

  categorias: Categorias[] = [];
  displayedColumns = ['name', 'category'];


  constructor() {
  }

  ngOnInit() {
  }

}
