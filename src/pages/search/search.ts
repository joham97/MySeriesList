import { Series } from './../../interfaces';
import { MySeriesListService } from './../../provider/myserieslist.service';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the SearchPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-search',
  templateUrl: 'search.html',
})
export class SearchPage {

  keywords: String;

  foundSeries: Series[];

  constructor(public navCtrl: NavController, public navParams: NavParams, public mySeriesListService: MySeriesListService) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SearchPage');
  }

  search(keywords: String){
    this.foundSeries = null;
    this.mySeriesListService.search(keywords, true).subscribe(
      (series: Series[]) => {
        this.foundSeries = series;
        console.log(series);
      },
      (err) => {
        console.log(err);
      });
  }

  showSeries(series: Series){
    console.log("Show Series", series);
  }

}
