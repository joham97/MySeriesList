import { SeriesPage } from './../series/series';
import { Series } from './../../interfaces';
import { MySeriesListService } from './../../provider/myserieslist.service';
import { Component, ViewChild } from '@angular/core';
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

  searching: boolean;

  constructor(public navCtrl: NavController, public navParams: NavParams, public mySeriesListService: MySeriesListService) {
    
  }

  search(keywords: String){
    this.foundSeries = null;
    this.searching = true;
    this.mySeriesListService.search(keywords).subscribe(
      (series: Series[]) => {
        this.searching = false;
        this.foundSeries = series;
        console.log(series);
      },
      (err) => {
        console.log(err);
      });
  }

  showSeries(series: Series){
    this.navCtrl.push(SeriesPage, {
      id: series.id
    });
  }

}
