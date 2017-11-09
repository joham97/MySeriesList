import { EpisodesPage } from './../episodes/episodes';
import { MySeriesListService } from './../../provider/myserieslist.service';
import { Season, Episode } from './../../interfaces';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the SeasonsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-seasons',
  templateUrl: 'seasons.html',
})
export class SeasonsPage {

  id: String;
  seasons: Season[];

  constructor(public navCtrl: NavController, public navParams: NavParams, public mySeriesListService: MySeriesListService) {
    this.id = this.navParams.data.id;
    this.seasons = this.navParams.data.seasons;

    this.calcProgress();
  }

  calcProgress(){
    this.seasons.forEach((s: Season)=>{
      let c: number = 0;
      s.episodes.forEach((e: Episode) =>{
        if(e.watched){
          c++;
        }
      });
      s.progress = Math.round(100*(c/s.episodes.length)) + "%";
      s.progressRest = (100-Math.round(100*(c/s.episodes.length))) + "%";
    });
  }

  showEpisodes(season: Season){
    this.navCtrl.push(EpisodesPage, {
      season: season, 
      lists: this.navParams.data.lists
    });
  }

}
