import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Lia } from './lia';

@Injectable()
export class LiaService {

  private mainUrl: string = 'http://localhost:3000';

  constructor(private http: Http) {}

  getUserLia(user: any, lia: any) {
    let url = `${this.mainUrl}/users/${user.id}/lia/${lia.id}`;

    return this.http.get(url)
      .toPromise()
      .then(response => response.json().data)
      .catch(this.handleError);
  }

  launchLia(user: any, lia: any): Promise<Lia> {
    let url = `${this.mainUrl}/users/${user.id}/lia/${lia.id}`;
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');

    return this.http.put(url, JSON.stringify(lia), {headers})
      .toPromise()
      .then(response => response.json().data)
      .catch(this.handleError);
  }

  private handleError(error: any) {
    console.log('An error occurred: ', error);
    return Promise.reject(error);
  }

}
