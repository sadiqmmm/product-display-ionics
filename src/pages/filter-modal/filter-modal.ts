import { Component } from '@angular/core';
import { NavController, NavParams, ViewController } from 'ionic-angular';

@Component({
  selector: 'page-filter-modal',
  templateUrl: 'filter-modal.html',
})
export class FilterModalPage {
  public femaleSelected = true;
  public maleSelected = true;

  constructor(private viewCtrl: ViewController, public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FilterModalPage');
  }
  closeModal() {
    let filterState = {
      femaleSelected: this.femaleSelected,
      maleSelected: this.maleSelected
    }
    this.viewCtrl.dismiss(filterState);
  }

}
