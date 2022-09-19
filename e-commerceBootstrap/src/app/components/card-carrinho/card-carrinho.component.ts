import { Router } from '@angular/router';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-carrinho',
  templateUrl: './card-carrinho.component.html',
  styleUrls: ['./card-carrinho.component.scss']
})
export class CardCarrinhoComponent implements OnInit {

  @Input()
  data:any;
  preco: any = '85,90';

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

}
