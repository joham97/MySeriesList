import { SeasonsPage } from './../seasons/seasons';
import { MySeriesListService } from './../../provider/myserieslist.service';
import { Series, Season, Episode } from './../../interfaces';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the SeriesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-series',
  templateUrl: 'series.html',
})
export class SeriesPage {
  
  id: String;
  series: Series;
  seasons: Season[];
  episodes: Episode[];

  genres: String;

  showAllActors: boolean;

  constructor(public navCtrl: NavController, public navParams: NavParams, public mySeriesListService: MySeriesListService) {
    this.id = this.navParams.data.id;

    if(this.id == "-1"){
      this.loadOfflineSeries();
      this.loadOfflineEpisodes();
    }else{
      this.loadSeries(this.id);
      this.loadEpisodesOfSeries(this.id);
    }
  }

  loadSeries(id: String){
    this.mySeriesListService.series(this.id).subscribe((series: Series) => {
      this.series = series;
      if(this.series.genres && this.series.genres.length > 0){
        this.genres = series.genres[0];
        for(let i = 1; i < series.genres.length; i++){
          if((this.genres + ", " + this.series.genres[i]).length < 26){
            this.genres += ", " + this.series.genres[i];
          }
        }
      }
    });
  }

  loadOfflineSeries(){
    this.mySeriesListService.offlineSeries(this.id).subscribe((series: Series) => {
      this.series = series;
      if(this.series.genres && this.series.genres.length > 0){
        this.genres = series.genres[0];
        for(let i = 1; i < series.genres.length; i++){
          if((this.genres + ", " + this.series.genres[i]).length < 26){
            this.genres += ", " + this.series.genres[i];
          }
        }
      }
    });
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
    this.seasons = [];
    this.episodes.forEach((episode: Episode) => {
      var season: Season;
      this.seasons.forEach((aSeason: Season) => {
        if(aSeason.seasonNumber == episode.seasonNumber){
          season = aSeason;
        }
      });
      if(season){
        season.episodes.push(episode);
      }else{
        this.seasons.push({
          seasonId: episode.seasonId,
          seasonNumber: episode.seasonNumber,
          episodes: [episode]
        });
      }
    });
    this.seasons.sort((s1: Season, s2: Season) => {
      return s1.seasonNumber-s2.seasonNumber;
    });
  }

  showSeasons(){
    this.navCtrl.push(SeasonsPage, {
      id: this.id,
      seasons: this.seasons
    });
  }

  addTo(){
    
  }

}
