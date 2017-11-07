import { MySeriesListService } from './../../provider/myserieslist.service';
import { Episode } from './../../interfaces';
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
  episodes: Episode[];

  constructor(public navCtrl: NavController, public navParams: NavParams, public mySeriesListService: MySeriesListService) {
    this.id = this.navParams.data.id;
    
    if(this.id == "-1"){
      this.loadOfflineEpisodes();
    }else{
      this.loadEpisodesOfSeries(this.id);
    }
  }

  loadEpisodesOfSeries(id: String){
    this.mySeriesListService.episodes(this.id).subscribe((episodes: Episode[]) => {
      this.episodes = episodes;
      this.createSeasons();
    });
  }
  
  loadOfflineEpisodes(){
    this.mySeriesListService.offlineEpisodes(this.id).subscribe((episodes: Episode[]) => {
      this.episodes = episodes;
      this.createSeasons();
    });
  }

  createSeasons(){
    //TODO
  }

}
