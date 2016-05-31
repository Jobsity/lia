import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class AuthService {

  private mainUrl: string = 'http://localhost:3000';

  constructor(private http: Http) {}

  loadAccessToken(userId: number) {
    let url = `${this.mainUrl}/users/${userId}`;
    let authUrl = `${this.mainUrl}/auth/local`;

    let headers = new Headers();
    headers.append('Content-Type', 'application/json');

    this.http.get(url)
      .toPromise()
      .then(response => {
        let user = response.json();
        return this.http.post(authUrl, JSON.stringify({email: user.email, password: 'test'}), {headers})
          .toPromise()
          .then(response => localStorage.setItem('lia:auth', response.json().token))
          .catch(this.handleError);
      })
      .catch(this.handleError);
  }

  getCurrentUserToken() {
    return localStorage.getItem('lia:auth');
  }

  removeCurrentUserToken() {
    localStorage.removeItem('lia:auth');
  }

  private handleError(error: any) {
    console.log('An error occurred: ', error);
    return Promise.reject(error);
  }


}
