import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ProductProvider } from '../../providers/product/product';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {
  public bestSellerProducts = [];
  constructor(public navCtrl: NavController, private productProvide: ProductProvider) {

  } 
  ionViewDidLoad() {
    this.productProvide.getProducts()
    .subscribe((allProduct) => {
      this.bestSellerProducts = allProduct.filter((product => product.bestSeller == true));
    });
  }

}
