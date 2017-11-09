import { SeriesService } from './../../provider/series.service';
import { List, Series } from './../../interfaces';
import { SeriesPage } from './../series/series';
import { SearchPage } from './../search/search';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  selectedList: number;
  lists: List[];

  series: Series[];

  constructor(public navCtrl: NavController, public seriesService: SeriesService) {
    this.lists = [
      {listId: 1, listName: "Watching"},
      {listId: 2, listName: "Completed"},
      {listId: 3, listName: "Plan to Watch"},
      {listId: 4, listName: "On Hold"},
      {listId: 5, listName: "Dropped"}
    ];

    this.selectedList = 1;

    this.series = this.seriesService.getAll();

    console.log(this.series);

    // this.navCtrl.push(SeriesPage, {
    //   lists: this.lists,
    //   id: "73255"
    //   //id: "-1"
    // });
  }

  search(){
    this.navCtrl.push(SearchPage, {
      lists: this.lists,
      series: this.series
    });
  }

}
