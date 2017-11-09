import { Injectable } from '@angular/core';

import { TechnischerService } from './technischer.service';

@Injectable()
export class MySeriesListService {

    public user: string;
    public password: string;
    public sessionKey: string;
    public mail: string;

    constructor(private techService: TechnischerService) { }

    public reg(values: string) {
        return this.techService.getRequest('/account/reg?' + values);
    }

    public signin(values: string) {
        return this.techService.getRequest('/account/login?' + values);
    }

    public search(keyword: String) {
        return this.techService.getRequest('/search?keywords=' + keyword);
    }
    
    public series(id: String) {
        return this.techService.getRequest('/series?id=' + id);
    }
    
    public episodes(id: String) {
        return this.techService.getRequest('/series/episodes?id=' + id);
    }
    
    public offlineSeries(id: String) {
        return this.techService.getRequest('/offline/series');
    }
    
    public offlineEpisodes(id: String) {
        return this.techService.getRequest('/offline/episodes');
    }
}
