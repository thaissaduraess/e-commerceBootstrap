import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.component.html',
  styleUrls: ['./carrinho.component.scss']
})
export class CarrinhoComponent implements OnInit {
  qnt:any = '1';
  price: any = 'R$ 129,90';
  frete: any = '-';

  constructor() { }

  ngOnInit(): void {
  }

}
