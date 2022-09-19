import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.component.html',
  styleUrls: ['./carrinho.component.scss']
})
export class CarrinhoComponent implements OnInit {

  name_product: any = 'Biquini 2'
  vl_product: any = 'R$ 54,90'
  qnt: any = '1'
  frete: any = '-'

  datas = [
    'Biquini',
    'Biquini 2'
  ]

  products = [
    {
      name_product: 'Biquini 1', vl_product: 'R$ 54,90', qnt: '1', frete: '-'
    },
    {
      name_product: 'Biquini 2', vl_product: 'R$ 54,90', qnt: '1', frete: '-'
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
