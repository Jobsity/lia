import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { ILia } from './lia';
import { AuthService } from './../auth/auth.service';

@Injectable()
export class LiaService {

  private mainUrl: string = 'http://localhost:3000';

  constructor(private http: Http, private auth: AuthService) {}

  getUserLia(userId: number, liaId: number) {
    let url = `${this.mainUrl}/users/${userId}/lia/${liaId}`;

    return this.http.get(url)
      .toPromise()
      .then(response => response.json().data)
      .catch(this.handleError);
  }

  launchLia(userId: number, lia: ILia): Promise<ILia> {
    let url = `${this.mainUrl}/users/${userId}/lia/${lia.id}`;
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');

    lia.state = "in_progress";
    lia.started_at = (new Date()).toISOString();

    return this.http.patch(url, JSON.stringify(lia), {headers})
      .toPromise()
      .then(response => {
        // get user's token
        this.auth.loadAccessToken(userId);

        return response.json().data
      })
      .catch(this.handleError);
  }

  saveProgress(userId: number, lia: ILia): Promise<ILia> {
    let url = `${this.mainUrl}/users/${userId}/lia/${lia.id}`;
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Authorization', this.auth.getCurrentUserToken());

    return this.http.patch(url, JSON.stringify(lia), {headers})
      .toPromise()
      .then(response => response.json())
      .catch(this.handleError);
  }

  submitLia(userId: number, lia: ILia) {
    let url = `${this.mainUrl}/users/${userId}/lia`;
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Authorization', this.auth.getCurrentUserToken());

    lia.state = "submitted";

    return this.http.post(url, JSON.stringify(lia), {headers})
      .toPromise()
      .then(response => response.json())
      .catch(this.handleError);
  }

  private handleError(error: any) {
    console.log('An error occurred: ', error);
    return Promise.reject(error);
  }
}
