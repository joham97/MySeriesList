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

  constructor(public navCtrl: NavController) {
    // this.navCtrl.push(SeriesPage, {
    //   id: "73255"
    //   //id: "-1"
    // });
    this.lists = [
      {listId: 1, listName: "Watching"},
      {listId: 2, listName: "Completed"},
      {listId: 3, listName: "Plan to Watch"},
      {listId: 4, listName: "On Hold"},
      {listId: 5, listName: "Dropped"}
    ];

    this.selectedList = 1;
  }

  search(){
    this.navCtrl.push(SearchPage);
  }

}

export class List {
  listId: number;
  listName: String;
}
