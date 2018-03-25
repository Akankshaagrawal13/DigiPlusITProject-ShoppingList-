import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from '@angular/material'; 
import { FlexLayoutModule } from '@angular/flex-layout';
import { AppRoutingModule } from './app-routing/app-routing.module';
import 'hammerjs';
//import { SearchByNamePipe } from './search-by-name.pipe';
import { FormsModule }   from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { ProductComponent } from './product/product.component';
import { ItemdetailComponent } from './itemdetail/itemdetail.component';


import { ReactiveFormsModule } from '@angular/forms';
import { ProcessHTTPMsgService } from './services/process-httpmsg.service';
import { HttpModule } from '@angular/http';
import { BaseURL } from './shared/baseurl';

import { RestangularModule, Restangular } from 'ngx-restangular';
import { RestangularConfigFactory } from './shared/restConfig';

import { ProductService } from './services/product.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    AboutComponent,
    HomeComponent,
    ContactComponent,
    ProductComponent,
    ItemdetailComponent,
    // SearchByNamePipe
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule,
    AppRoutingModule,
    FormsModule,
    RestangularModule.forRoot(RestangularConfigFactory)
  ],
  providers: [ProductService,{provide:'BaseURL',useValue:BaseURL},ProcessHTTPMsgService],
  bootstrap: [AppComponent]
})
export class AppModule { }
