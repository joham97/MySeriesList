import { Observable } from 'rxjs/Observable';
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

    public search(keyword: String, thumbnail: boolean) {
        return this.techService.getRequest('/search?keywords=' + keyword);
    }

    public seriesCover(keyword: String, thumbnail: boolean) {
        return this.techService.getRequest('/series/cover?keywords=' + keyword + '&thumbnail=' + thumbnail);
    }
}
