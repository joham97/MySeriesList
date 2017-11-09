import { Season, Episode } from './../../interfaces';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the EpisodesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-episodes',
  templateUrl: 'episodes.html',
})
export class EpisodesPage {

  season: Season;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.season = this.navParams.data.season;
    console.log(this.season);
  }

  toggle(episode: Episode){
    episode.watched = !episode.watched;
  }
}
