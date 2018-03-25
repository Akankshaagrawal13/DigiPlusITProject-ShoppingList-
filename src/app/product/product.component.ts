 import { Component, OnInit, Inject } from '@angular/core';
 import { Product } from '../shared/product';
 import { ProductService } from '../services/product.service';
  import { BaseURL } from '../shared/baseurl';
  import { expand } from '../animations/app.animation';
  import { FormBuilder, FormGroup, Validators } from '@angular/forms';
  
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
  animations:
   [
    expand()
  ]
})
 export class ProductComponent implements OnInit {

   products: Product[];
   errMess: string;
   searchText = '';
   

  constructor(private productService: ProductService,@Inject('BaseURL') private BaseURL) {}

  ngOnInit() {
   this.productService.getProducts()
    .subscribe(products => this.products = products,
      errmess => this.errMess = <any>errmess);
   }
}

 

