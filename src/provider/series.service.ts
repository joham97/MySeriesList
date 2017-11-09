import { Series } from './../interfaces';
import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

@Injectable()
export class SeriesService {

    constructor(public storage: Storage) {
        
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
        this.storage.length().then((length: number) => {
            if(length > 0){
                var wait = true;
                this.storage.keys().then((keys: string[]) => {
                    console.log("does it even fetch");
                    keys.forEach((key: string) => {
                        this.storage.get(key).then((val)=>{
                            series.push(val);
                        });
                    });
                    wait = false;
                }).catch(()=>{ wait = false;});

                while(wait){}   
            }         
        });
        return series;
    }

}
