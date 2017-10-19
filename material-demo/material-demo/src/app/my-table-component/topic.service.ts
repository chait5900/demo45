
import {Injectable} from '@angular/core';
import { Http } from '@angular/http';
import { Topic } from './topic';
import 'rxjs/add/operator/map';
import { Observable }     from 'rxjs/Observable';

@Injectable()
export class TopicService {

    constructor(private http: Http) {
    }

   // private headers = new Headers({'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*'} );

    getTopics(): Observable<Topic> {
                return this.http.get(`http://localhost:3000/topics/2`)
                                .map((res) => res.json() as Topic);
    }

    getAllTopics():Observable<Topic[]>{

        return this.http.get(`http://localhost:3000/topics`).map(resp =>resp.json() as Topic[]);
    }

    private handleError(error: any): Promise<any> {
        return Promise.reject(error.message || error);
    }

}