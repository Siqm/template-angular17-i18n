import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss'
})
export class ProductComponent {

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {
    console.log('Componente construído');
  }

  ngOnChanges() {
    console.log('componente changes');
  }

  ngOnInit() {
    console.log('componente inicializado');
  }

  ngDoCheck() {
    console.log('componente check');
  }

  ngAfterViewIniit() {
    console.log('componente view inicializada');
  }

  ngOnDestroy() {
    console.log('destruido');
  }

}
