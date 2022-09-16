import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.css']
})
export class ListProductsComponent implements OnInit {

  datas = [
  'Camisa 1',
  'Camisa 2',
  'Camisa 3',
  'Camisa 4',
  'Camisa 5',
  'Camisa 6',
  'Camisa 7',
  'Camisa 8',
  'Camisa 9',
  'Camisa 10',
  'Camisa 11',
  'Camisa 12'
]

  products = [
    {
      id: 1, vl_product: 'R$ 54,90', srcImg: 'assets/products/academia/academia7.jpg',name_product: 'Roupa de Banho 1'
    },
    {
      id: 2, vl_product: 'R$ 54,90', srcImg: 'assets/products/academia/academia2.jpg', name_product: 'Roupa de Banho 2'
    },
    {
      id: 3, vl_product: 'R$ 54,90', srcImg: 'assets/products/academia/academia8.jpg', name_product: 'Roupa de Banho 3'
    },
    {
      id: 4, vl_product: 'R$ 70.00', srcImg: 'assets/products/academia/academia4.jpg', name_product: 'Roupa de Banho 4'
    },
    {
      id: 5, vl_product: 'R$ 54,90', srcImg: 'assets/products/academia/academia5.jpg', name_product: 'Roupa de Banho 5'
    },
    {
      id: 6, vl_product: 'R$ 32.00', srcImg: 'assets/products/academia/academia6.jpg', name_product: 'Roupa de Banho 6'
    },
    {
      id: 7, vl_product: 'R$ 22.00', srcImg: 'assets/products/praia/praia9.jpg', name_product: 'Roupa de Banho 7'
    },
    {
      id: 8, vl_product: 'R$ 55,90', srcImg: 'assets/products/praia/praia11.jpg', name_product: 'Roupa de Banho 8'
    },
    {
      id: 9, vl_product: 'R$ 55,90', srcImg: 'assets/products/praia/praia4.jpg', name_product: 'Roupa de Banho 9'
    },
    {
      id: 10, vl_product: 'R$ 55,90', srcImg: 'assets/products/praia/praia5.jpg', name_product: 'Roupa de Banho 10'
    },
    {
      id: 11, vl_product: 'R$ 70,00', srcImg: 'assets/products/praia/praia6.jpg', name_product: 'Roupa de Banho 11'
    },
    {
      id: 12, vl_product: 'R$ 55,90', srcImg: 'assets/products/praia/praia7.jpg', name_product: 'Roupa de Banho 12'
    }
  ]

  constructor() { }

  ngOnInit() {
  }

}
