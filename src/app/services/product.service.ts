import { Injectable } from '@angular/core';
import { Product } from '../shared/product';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { BaseURL } from '../shared/baseurl';
import { ProcessHTTPMsgService } from './process-httpmsg.service';
import { RestangularModule, Restangular } from 'ngx-restangular';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/delay';
import 'rxjs/add/operator/catch';

@Injectable()
export class ProductService {

  constructor(private restangular: Restangular,
              private processHTTPMsgService: ProcessHTTPMsgService) { }

   getProducts(): Observable<Product[]> {
    return this.restangular.all('products').getList();
  }

  getProduct(id: number): Observable<Product> {
    return  this.restangular.one('products',id).get();
  }

 getFeaturedProduct(): Observable<Product> {
    return this.restangular.all('products').getList({featured: true})
      .map(products => products[0]);
  } 

 getProductIds(): Observable<number[] | any> {
    return this.getProducts()
      .map(products => { return products.map(product => product.id) })
      .catch(error => { return error; } );
  }

}










