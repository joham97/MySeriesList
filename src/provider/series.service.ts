import { Series } from './../interfaces';
import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

@Injectable()
export class SeriesService {

    series: Series[];

    constructor(public storage: Storage) {
        
    }

    public clear(){
        this.storage.forEach((value, key, index) => {
            this.storage.remove(key);
        });
    }

    public put(series: Series){
        this.storage.set('series '+ series.id, series);
    }

    public get(id: number):Series {
        var series : Series = null; 
        var wait = true;

        this.storage.get('series '+ id).then((val)=>{
            series = val;
            wait = false;
        }).catch(()=> {wait = false;} );
        while(wait){} 
        return series;
    }   

    public getAll():Series[] {
        var series : Series[] = []; 
        this.storage.forEach((value, key, index) => {
            series.push(value);
        });
        return series;
    }

}
