import { SeriesPage } from './../series/series';
import { SearchPage } from './../search/search';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {
    this.navCtrl.push(SeriesPage, {
      id: "121361"
    });
  }

  search(){
    this.navCtrl.push(SearchPage);
  }

}
