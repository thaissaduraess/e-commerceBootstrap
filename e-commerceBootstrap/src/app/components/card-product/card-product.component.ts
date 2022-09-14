import { Component, Input, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card-product',
  templateUrl: './card-product.component.html',
  styleUrls: ['./card-product.component.scss']
})
export class CardProductComponent implements OnInit, OnChanges{

  @Input() data:any;
  preco: any = '85,90';


  constructor(private router: Router) { }

  ngOnInit(): void {
  }


  ngOnChanges(changes: SimpleChanges): void {
    console.log('changes', changes)
  }

  goToProductPage(){
    console.log('---> ', this.data);
    this.router.navigate(['/products/details/', this.data.id])
  }
}
