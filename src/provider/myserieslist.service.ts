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

    public search(keyword: String) {
        return this.techService.getRequest('/player/ranking?sessionkey=' + this.sessionKey + "&keyword=" + keyword);
    }
}
