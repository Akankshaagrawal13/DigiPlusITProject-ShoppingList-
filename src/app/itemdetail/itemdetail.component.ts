import { Component, OnInit, Inject } from '@angular/core';
import { Product } from '../shared/product';
import { ProductService } from '../services/product.service';
import { Params, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import 'rxjs/add/operator/switchMap';
import { expand } from '../animations/app.animation';

@Component({
  selector: 'app-itemdetail',
  templateUrl: './itemdetail.component.html',
  styleUrls: ['./itemdetail.component.scss'],
  animations: [ expand() ]
})
export class ItemdetailComponent implements OnInit {

  product: Product;
  productIds: number[];
  errMess: string;

 constructor(private productService: ProductService,
    private route: ActivatedRoute,
    @Inject('BaseURL') private BaseURL) {}

  ngOnInit() {
   
    this.productService.getProductIds().subscribe(productIds => this.productIds = productIds);
    this.route.params
      .switchMap((params: Params) => { return this.productService.getProduct(+params['id']); })
      .subscribe(product => { this.product = product; },
      errmess => { this.product = null; this.errMess = <any>errmess });
 }

}



