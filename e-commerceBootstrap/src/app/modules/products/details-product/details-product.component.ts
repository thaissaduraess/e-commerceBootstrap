import { Router } from '@angular/router';
import { Component, Input, OnInit, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-details-product',
  templateUrl: './details-product.component.html',
  styleUrls: ['./details-product.component.css']
})
export class DetailsProductComponent implements OnInit, OnChanges {

  @Input()
  texto: any = 'Em linguística, a noção de texto é ampla e ainda aberta a uma definição mais precisa. Grosso modo, pode ser entendido como manifestação linguística das ideias de um autor, que serão interpretadas pelo leitor de acordo com seus conhecimentos linguísticos e culturais. Seu tamanho é variável.';


  constructor(private router: Router) { }

  ngOnInit(): void {
  }


  ngOnChanges(changes: SimpleChanges): void {
    console.log('changes', changes)
  }


  goToProductPage(){
    this.router.navigate(['home'])
  }

  goToProductPage1(){
    this.router.navigate(['products'])
  }

  goToProductPage2(){
    this.router.navigate(['/products/details/:id'])
  }
}
