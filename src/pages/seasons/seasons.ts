import { EpisodesPage } from './../episodes/episodes';
import { MySeriesListService } from './../../provider/myserieslist.service';
import { Season, Episode, Series } from './../../interfaces';
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
  series: Series;

  constructor(public navCtrl: NavController, public navParams: NavParams, public mySeriesListService: MySeriesListService) {
    this.id = this.navParams.data.id;
    this.series = this.navParams.data.series;
  }
  
  ionViewWillEnter(){
    this.calcProgress();
  }

  calcProgress(){
    this.series.currentEpisode = 0;
    this.series.currentSeason = 0;
    this.series.seasons.forEach((s: Season)=>{
      s.progressNumber = 0;
      s.episodes.forEach((e: Episode) =>{
        if(e.watched){
          s.progressNumber++;
          if(e.seasonNumber > this.series.currentSeason){
            this.series.currentSeason = e.seasonNumber;
          }
          if(e.seasonNumber >= this.series.currentSeason && e.episodeNumber > this.series.currentEpisode){
            this.series.currentEpisode = e.episodeNumber;
            this.series.currentSeason = e.seasonNumber;
          }
        }
      });
      s.progress = Math.round(100*(s.progressNumber/s.episodes.length)) + "%";
      s.progressRest = (100-Math.round(100*(s.progressNumber/s.episodes.length))) + "%";
    });
  }

  showEpisodes(season: Season){
    this.navCtrl.push(EpisodesPage, {
      season: season, 
      lists: this.navParams.data.lists
    });
  }

}
