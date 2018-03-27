import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, private http: HttpClient) {

  }
  ionViewDidLoad() {
    this.http.get<any[]>('/assets/data.json') 
    .subscribe(data => console.log(data));
  }

}
