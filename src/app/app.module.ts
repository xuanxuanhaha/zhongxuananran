import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import {RouterModule} from '@angular/router';
import { ProductComponent } from './product/product.component';
import { ContactComponent } from './contact/contact.component';
import {FormsModule} from '@angular/forms';
import { SitemapComponent } from './sitemap/sitemap.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductComponent,
    ContactComponent,
    SitemapComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {path: '', component: HomeComponent},
      {path: 'home', component: HomeComponent},
      {path: 'product', component: ProductComponent},
      {path: 'contact', component: ContactComponent},
      {path: 'sitemap', component: SitemapComponent}
    ]),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
