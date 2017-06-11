import {Injectable} from '@angular/core';
import { Http, Response }          from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class TwitterService{
  private baseStreamingUrl = 'https://api.twitter.com/1.1/search/tweets.json';

  constructor (private http: http){}

  private refresh(){

  }

  private getTweetsByUser(user: string){

  }

  private obtainOAuthToken(key: string, secret: string){
    
  }

}
